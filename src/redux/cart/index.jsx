import initialState from "./initialState";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_TO_CART } from "./ types";
import { Product } from "../../models";

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCartState(state, action);

    case REMOVE_PRODUCT_TO_CART:
      return removeProductToCartState(state, action);

    default:
      return defaultState(state, action);
  }
}

function defaultState(state = initialState, {}) {
  return { ...state };
}

function addProductToCartState(
  state = initialState,
  { payload: product = new Product() }
) {
  const products = [...state.products, product];

  return { ...state, products };
}

function removeProductToCartState(
  state = initialState,
  { payload: product = new Product() }
) {
  const products = state.products.filter(({ id }) => id !== product.id);

  return { ...state, products };
}
