// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PRODUCTS } from "lib/products"

export default (req, res) => {
  res.status(200).json(PRODUCTS)
}
