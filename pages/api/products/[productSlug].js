import { PRODUCTS } from "lib/products"

export default function handler(req, res) {
  const { productSlug } = req.query
  const product = PRODUCTS.find(product => product.title.replace(/\s+/g, '-').toLowerCase() === productSlug)
  res.status(200).json(product)
}