import { supabase } from "@/integrations/supabase/client";
import React, { useState, useCallback, useRef } from "react";
import PageWrapper from "../PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { validatePassword } from "./utils";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({
    valid: true,
    message: "",
    cp_valid: true,
  });

  const cpPasswordRef = useRef<HTMLInputElement>(null);
  const cpMsg = "Password and confirm password should be the same.";

  const checkSession = useCallback(async () => {
    const { error } = await supabase.auth.getSession();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      return true;
    }
    return false;
  }, [toast]);

  const resetPassword = useCallback(async () => {
    if (!validation.valid || !validation.cp_valid) {
      toast({
        title: "Password invalid",
        description: validation.valid ? validation.message : cpMsg,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    if (await checkSession()) {
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "Password has been reset successfully!",
      });
      navigate("/");
    }

    setLoading(false);
  }, [validation, newPassword, checkSession, toast, navigate]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      resetPassword();
    },
    [resetPassword]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setNewPassword(value);

      const validationObj = validatePassword(value);
      const isMatched = value === cpPasswordRef.current?.value;

      setValidation((prev) => ({
        ...prev,
        ...validationObj,
        cp_valid: isMatched,
      }));
    },
    []
  );

  const handleCPasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const isMatched = e.target.value === newPassword;
      setValidation((prev) => ({ ...prev, cp_valid: isMatched }));
    },
    [newPassword]
  );

  return (
    <PageWrapper>
      <div className="flex justify-center items-center flex-col">
        <div className="space-y-6 px-4 py-6 bg-white shadow-lg my-20">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold">Set New Password</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 min-w-[400px]">
            <div className="space-y-2 relative">
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={handlePasswordChange}
                required
              />
              {!validation.valid && (
                <p className="text-red-800 text-xs absolute -bottom-5 left-0">
                  {validation.message}
                </p>
              )}
            </div>
            <div className="space-y-2 relative">
              <Label htmlFor="cp_password">Confirm Password</Label>
              <Input
                ref={cpPasswordRef}
                id="cp_password"
                type="password"
                placeholder="Confirm Password"
                onChange={handleCPasswordChange}
                required
              />
              {!validation.cp_valid && (
                <p className="text-red-800 text-xs absolute -bottom-5 left-0">
                  {cpMsg}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Updating..." : "Change Password"}
            </Button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PasswordReset;