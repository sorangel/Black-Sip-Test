import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  ButtonComponent,
  PageLayoutComponent,
  ProductListComponent,
} from "../components";
import { Product } from "../models";
import { removeProductToCart } from "../redux/cart/actions";

import styles from "../styles/pages/cartPageStyles.module.scss";

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
});

const mapDispatchToProps = (dispatch) => ({
  removeProductToCart: (product = new Product()) =>
    removeProductToCart(dispatch, product),
});

function CartPage({ products, removeProductToCart, history }) {
  const formattedProducts = products.map((product) => ({
    ...product,
    action: doClickActionOfProduct,
    actionText: "ELIMINAR",
  }));

  function doClickActionOfProduct({ target }, product = new Product()) {
    removeProductToCart(product);
  }

  return (
    <PageLayoutComponent dark title="Car Page" headerHiddenActions>
      <ProductListComponent products={formattedProducts} />

      <div className={styles.totals}>
        <div className={styles.spacer} />

        <div className={styles.subTotal}>
          <strong className={styles.label}>Sub Totla</strong>
          <strong className={styles.amount}>{`$${products.reduce(
            (acc, product = new Product()) => acc + Number(product.price),
            0
          )}`}</strong>
        </div>

        <div className={styles.sent}>
          <strong className={styles.label}>Envio</strong>
          <strong className={styles.amount}>A calcular</strong>
        </div>

        <ButtonComponent
          style={{ width: "100%", fontSize: "1.3em" }}
          text="COMPRAR"
          onClick={() => history.push("/invoice")}
        />
      </div>

      <div className={styles.bottomMargin} />
    </PageLayoutComponent>
  );
}

CartPage.defaultProps = {
  products: [],
  removeProductToCart: () => undefined,
};

CartPage.propTypes = {
  products: PropTypes.array.isRequired,
  removeProductToCart: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
