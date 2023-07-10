import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  res.status(200).json(getAllProducts());
  res.status(404).json({ message: "Product not found" });
}
