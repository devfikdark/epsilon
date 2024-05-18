import { z } from "zod";

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
