export function validatePassword(password: string): {
  valid: boolean;
  message: string;
} {
  if (!password) {
    return { valid: false, message: "Password is required." };
  }

  if (password.length < 6 || password.length > 16) {
    return {
      valid: false,
      message: "Password must be between 6 and 16 characters long.",
    };
  }

  if (!/[a-zA-Z]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one letter.",
    };
  }

  if (!/\d/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one number.",
    };
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      valid: false,
      message: "Password must contain at least one special character.",
    };
  }

  return { valid: true, message: "Password is valid" };
}

export function validateIndianMobileNumber(mobileNumber: string): boolean {
    // Regular expression for Indian mobile number validation
    const regex = /^[6-9]\d{9}$/;
  
    // Remove any leading or trailing whitespace
    const trimmedNumber = mobileNumber.trim();
  
    // Test the mobile number against the regex
    return regex.test(trimmedNumber);
  }
