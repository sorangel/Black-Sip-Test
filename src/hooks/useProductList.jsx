import { useEffect, useState } from "react";
import { getProducts } from "../services";
import { productFormatter } from "../utils";

export default function useProductList({
  doClickActionOfProduct,
  actionTextOfProduct = "",
} = {}) {
  const [state, setState] = useState({
    products: [],
  });

  const { products } = state;

  useEffect(() => {
    getProducts()
      .then((results = []) => {
        const formattedProducts = productFormatter(results, {
          action: doClickActionOfProduct,
          actionText: actionTextOfProduct,
        });

        setState({
          ...state,
          products: formattedProducts,
        });
      })
      .catch(console.error);
  }, []);

  return { products };
}
