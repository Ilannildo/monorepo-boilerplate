import { z } from "zod";

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().min(1).default(1).describe("Página atual"),
  limit: z.coerce.number().min(1).max(100).default(10).describe("Itens por página"),  
});

export type PaginationQueryDto = z.infer<typeof PaginationQuerySchema>;
