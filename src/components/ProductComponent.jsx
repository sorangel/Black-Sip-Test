import PropTypes from "prop-types";
import { ButtonComponent } from "./";
import styles from "../styles/components/productComponent.module.scss";

function ProductComponent({ id, image, name, price, action, actionText }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      <div className={styles.contentContainer}>
        <h6 className={styles.title}>{name}</h6>
      </div>

      <div className={styles.actionsContainer}>
        <span className={styles.price}>{`$${price}`}</span>

        {!!action && !!actionText && (
          <ButtonComponent
            text={actionText}
            onClick={async (event) => action(event, { id, image, name, price })}
          />
        )}
      </div>
    </div>
  );
}

ProductComponent.defaultProps = {
  id: "",
  image: "",
  name: "",
  price: 0,
  actionText: "",
};

ProductComponent.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  action: PropTypes.func,
  actionText: PropTypes.string,
};

export default ProductComponent;
