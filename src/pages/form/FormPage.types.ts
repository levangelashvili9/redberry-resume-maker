import { z } from "zod";

export const Schema = z.object({
  name: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/),
  surname: z
    .string()
    .min(2)
    .regex(/^[ა-ჰ]+$/),
  aboutMe: z.string().optional(),
  email: z.string().endsWith("@redberry.ge"),
  number: z.string().startsWith("+995").length(13), ///^\+995\s5\d{2}\s\d{2}\s\d{2}\s\d{2}$/
});

export type FormTypes = z.infer<typeof Schema>;
