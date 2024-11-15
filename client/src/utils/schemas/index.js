import * as Yup from "yup";

const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const passwordSchema = Yup.string()
  .min(8, "Password must be at least 8 characters long")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[0-9]/, "Password must contain at least one number")
  .matches(/[!@#$%^&*]/, "Password must contain at least one special character")
  .required("Password is required");

export const emailSchema = Yup.string()
  .matches(EMAIL_PATTERN, "Invalid email address")
  .required("Email is required");

export const SignupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9_ ]*$/, "Name should not contain special characters")
    .min(3, "Name must be at least 3 characters")
    .required("Username is required"),
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  gender: Yup.string()
    .oneOf(
      ["Male", "Female", "Non-Binary", "Other"],
      "Please select a valid gender"
    )
    .required("Gender is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export const AddAdminValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9_ ]*$/, "Name should not contain special characters")
    .min(3, "Name must be at least 3 characters")
    .required("Username is required"),
  email: emailSchema,
  newEmail: emailSchema,
  gender: Yup.string()
    .oneOf(
      ["Male", "Female", "Non-Binary", "Other"],
      "Please select a valid gender"
    )
    .required("Gender is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

export const SigninSchema = Yup.object().shape({
  email: emailSchema,
  password: Yup.string().required("Password is required"),
});

export const ResetPassword = Yup.object().shape({
  otp: Yup.string().required("OTP is required"),
  password: passwordSchema,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const UpdateProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z0-9_ ]*$/, "Name should not contain special characters")
    .min(3, "Name must be at least 3 characters"),
  password: Yup.string(),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Passwords must match"
  ),
  phone: Yup.string().matches(
    /^\d{10}$/,
    "Phone number must be exactly 10 digits"
  ),
});
