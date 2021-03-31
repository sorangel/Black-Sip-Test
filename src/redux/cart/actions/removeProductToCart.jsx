import { REMOVE_PRODUCT_TO_CART } from "../ types";
import { Product } from "../../../models";

export default (dispatch, product = new Product()) =>
  dispatch({ type: REMOVE_PRODUCT_TO_CART, payload: product });
