import { z } from "zod";

const loginValidator = z.object({
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

export default loginValidator;
