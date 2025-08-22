import z from "zod";
//定义产品的Zod验证模式
const productSchema = z.object({
    name: z.string().min(3),
    description: z.string(),
    price: z.number().min(0, "Price must be a positive number"),
})
export default productSchema;
