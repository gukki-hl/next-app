import z from "zod";

const userSchema = z.object({
  id: z.string().uuid().min(3),
  name: z.string().min(1).max(5),
  email: z.string().email(),
});

export  default  userSchema
