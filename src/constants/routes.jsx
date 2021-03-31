import {
  CartPage,
  HomePage,
  InvoicePage,
  NotFoundPage,
  ProductPage,
  ThankYouForYourPurchasePage,
} from "../pages";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true,
    strict: true,
  },
  {
    path: "/cart",
    component: CartPage,
    strict: true,
  },
  {
    path: "/invoice",
    component: InvoicePage,
    strict: true,
  },
  {
    path: "/product",
    component: ProductPage,
    strict: true,
  },
  {
    path: "/thank-you-for-your-purchase",
    component: ThankYouForYourPurchasePage,
    strict: true,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];
