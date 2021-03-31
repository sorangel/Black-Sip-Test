import PropTypes from "prop-types";
import { FaShoppingCart } from "react-icons/fa";

import styles from "../styles/components/headerOfPageComponent.module.scss";

function HeaderOfPageComponent({
  title,
  countOfProducts,
  doClickShoppingCart,
  dark,
  hiddenActions,
}) {
  const theme = dark ? styles.containerDark : styles.containerLight;

  return (
    <div className={`${styles.container} ${theme}`}>
      <h2>{title}</h2>

      {!hiddenActions && <div className={styles.spacer} />}

      {!hiddenActions && (
        <button className={styles.shoppingCart} onClick={doClickShoppingCart}>
          <FaShoppingCart className={styles.icon} />

          {!!countOfProducts && (
            <div className={styles.badge}>{countOfProducts}</div>
          )}
        </button>
      )}
    </div>
  );
}

HeaderOfPageComponent.defaultProps = {
  countOfProducts: 0,
  title: "",
  doClickShoppingCart: (event) => undefined,
  dark: false,
  hiddenActions: false,
};

HeaderOfPageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  countOfProducts: PropTypes.number.isRequired,
  doClickShoppingCart: PropTypes.func.isRequired,
  dark: PropTypes.bool,
  hiddenActions: PropTypes.bool,
};

export default HeaderOfPageComponent;
