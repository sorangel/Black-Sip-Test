import { ADD_PRODUCT_TO_CART } from "../ types";
import { Product } from "../../../models";

export default (dispatch, product = new Product()) =>
  dispatch({ type: ADD_PRODUCT_TO_CART, payload: new Product(product) });
