import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getAllProducts().find((product) => product.id === id);
  res.status(200).json(product);
  res.status(404).json({ message: "Product not found" });
}
