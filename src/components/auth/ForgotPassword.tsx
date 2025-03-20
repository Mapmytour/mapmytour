import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

export const ForgotPasswordForm = ({
  onBackToLogin,
}: ForgotPasswordFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;

      toast({
        title: "Check your email",
        description: "We've sent you a password reset link.",
      });
      onBackToLogin();
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: (error as { message: React.ReactNode }).message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 px-4 py-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Reset password</h2>
        <p className="text-sm text-muted-foreground">
          Enter your email to reset your password
        </p>
      </div>
      <form onSubmit={handleResetPassword} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </form>
      <div className="text-center">
        <Button variant="link" onClick={onBackToLogin}>
          Back to login
        </Button>
      </div>
    </div>
  );
};