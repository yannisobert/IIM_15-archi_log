import { z } from 'zod';

export const peeLocationSchema = z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
});

export const peeDataSchema = z.object({
    id: z.string().uuid(),
    location: peeLocationSchema,
    date: z.date(),
    user: z.string().min(3),
});

export type PeeData = z.infer<typeof peeDataSchema>;