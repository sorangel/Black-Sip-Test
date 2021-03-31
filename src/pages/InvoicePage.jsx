import { PageLayoutComponent } from "../components";
import { connect } from "react-redux";

const mapStateToProps = ({ cart }) => ({});

const mapDispatchToProps = (dispatch) => ({});

function InvoicePage() {
  return (
    <PageLayoutComponent
      headerHiddenActions
      title="Dirección de envio"
    ></PageLayoutComponent>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoicePage);
