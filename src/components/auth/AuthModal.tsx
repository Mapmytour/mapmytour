
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { LoginForm } from "./Login";
import { SignupForm } from "./Signup";
import { ForgotPasswordForm } from "./ForgotPassword";

type AuthView = "login" | "signup" | "forgotPassword";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal = ({ isOpen, onOpenChange }: AuthModalProps) => {
  const [view, setView] = useState<AuthView>("login");

  const handleAuthSuccess = () => {
    // Close the modal on successful authentication
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        {view === "login" && (
          <LoginForm
            onForgotPassword={() => setView("forgotPassword")}
            onSignupClick={() => setView("signup")}
            onSuccess={handleAuthSuccess}
          />
        )}
        {view === "signup" && (
          <SignupForm 
            onLoginClick={() => setView("login")} 
            onSuccess={handleAuthSuccess}
          />
        )}
        {view === "forgotPassword" && (
          <ForgotPasswordForm onBackToLogin={() => setView("login")} />
        )}
      </DialogContent>
    </Dialog>
  );
};