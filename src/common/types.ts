import { z } from "zod";

export const InfoSchema = z.object({
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

export const ExperienceSchema = z.object({
  jobs: z.array(
    z.object({
      position: z.string().min(2),
      // company: z.string().min(2),
      // startDate: z.string(),
      // endDate: z.string(),
      // jobDescription: z.string().optional(),
    })
  ),
});

export type InfoTypes = z.infer<typeof InfoSchema>;
export type ExperienceTypes = z.infer<typeof ExperienceSchema>;
