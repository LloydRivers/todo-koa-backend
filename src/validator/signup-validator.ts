import { z } from "zod";

const signupValidator = z.object({
  name: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name must only contain letters and spaces",
    }),
  surname: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Surname must only contain letters and spaces",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(6)
    .max(100)
    .regex(/^(?=.*[A-Z])(?=.*[@£$%]).*$/, {
      message:
        "Password must contain at least one uppercase letter and one special character",
    }),
});

export default signupValidator;
