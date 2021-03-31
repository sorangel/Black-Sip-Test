import { connect } from "react-redux";
import PropTypes from "prop-types";
import { PageLayoutComponent, ProductListComponent } from "../components";
import { useProductList } from "../hooks";
import { Product } from "../models";
import { addProductToCart } from "../redux/cart/actions";

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product = new Product()) =>
    addProductToCart(dispatch, product),
});

function HomePage({ addProductToCart, products }) {
  const { products: productListData = [] } = useProductList({
    actionTextOfProduct: "AÑADIIR",
    doClickActionOfProduct,
  });

  function doClickActionOfProduct({ target }, product = new Product()) {
    addProductToCart(product);
  }

  return (
    <PageLayoutComponent title="INICIO" headerCountOfProducts={products.length}>
      <ProductListComponent products={productListData} />
    </PageLayoutComponent>
  );
}

HomePage.defaultProps = {
  products: [],
};

HomePage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
