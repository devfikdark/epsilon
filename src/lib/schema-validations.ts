import { z } from "zod";

import { BDPhoneNumber } from "./regex";

export const SignInSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
    .min(8, "Must be at least 8 characters in length"),
});

export const UserSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().trim().email(),
    phone_number: z.string().regex(BDPhoneNumber, "Invalid Phone number"),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "One special character")
      .min(8, "Must be at least 8 characters in length"),
    confirm_password: z.string(),
    role: z.string().refine((value) => value !== "", {
      message: "Role is required",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
