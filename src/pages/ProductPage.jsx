import { connect, useStore } from "react-redux";
import { PageLayoutComponent } from "../components";
import PropTypes from "prop-types";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

function ProductPage() {
  const store = useStore().getState();

  return (
    <PageLayoutComponent
      headerCountOfProducts={store.products.length}
      title=" Product Page"
    ></PageLayoutComponent>
  );
}

ProductPage.defaultProps = {};

ProductPage.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
