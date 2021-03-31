import PropTypes from "prop-types";
import { PageLayoutComponent } from "../components";
import { connect } from "react-redux";

const mapStateToProps = ({ cart }) => ({
  products: cart.products,
});

const mapDispatchToProps = (dispatch) => ({});

function NotFoundPage({ products }) {
  return (
    <PageLayoutComponent
      title="No se encontro la pagina"
      headerCountOfProducts={products.length}
    ></PageLayoutComponent>
  );
}

NotFoundPage.defaultProps = {
  products: [],
};

NotFoundPage.propTypes = {
  products: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotFoundPage);
