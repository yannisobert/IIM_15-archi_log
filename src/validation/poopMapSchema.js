import { z } from 'zod';

export const poopDataSchema = z.object({
    id: z.string().uuid(),
    location: z.string().min(5),
    date: z.date(),
    user: z.string().min(3),
});
