import { Product } from "../models";

export default function productFormatter(
  products = [],
  {
    action = async (event, product = new Product()) => undefined,
    actionText = "",
  }
) {
  return products.map(
    (product) =>
      new Product({
        ...product,
        action,
        actionText,
      })
  );
}
