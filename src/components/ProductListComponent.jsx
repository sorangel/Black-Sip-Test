import PropTypes from "prop-types";
import { nanoid as uuid } from "nanoid";
import { ProductComponent } from "./";
import { Product } from "../models";
import styles from "../styles/components/productListComponent.module.scss";

function ProductListComponent({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product = new Product()) => (
        <ProductComponent key={uuid()} {...product} />
      ))}
    </div>
  );
}

ProductListComponent.defaultProps = {
  products: [],
};

ProductListComponent.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductListComponent;
