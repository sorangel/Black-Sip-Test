import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { HeaderOfPageComponent } from "./";
import styles from "../styles/components/pageLayoutComponent.module.scss";

function PageLayoutComponent({
  children,
  dark,
  title,
  history,
  headerHiddenActions,
  headerCountOfProducts,
}) {
  const doClickShoppingCart = () => history.push("/cart");

  return (
    <div className={styles.container}>
      <HeaderOfPageComponent
        title={title}
        doClickShoppingCart={doClickShoppingCart}
        dark={dark}
        hiddenActions={headerHiddenActions}
        countOfProducts={headerCountOfProducts}
      />

      <div className={styles.main}>{children}</div>
    </div>
  );
}

PageLayoutComponent.defaultProps = {
  headerHiddenActions: false,
  dark: false,
  headerCountOfProducts: 0,
  title: "",
};

PageLayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  headerCountOfProducts: PropTypes.number,
  headerHiddenActions: PropTypes.bool,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(PageLayoutComponent);
