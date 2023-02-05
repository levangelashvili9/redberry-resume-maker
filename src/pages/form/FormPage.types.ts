import { z } from "zod";

export const Schema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string(),
});

export type FormTypes = z.infer<typeof Schema>;
