import { PageLayoutComponent } from "../components";
import { connect } from "react-redux";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({});

function ThankYouForYourPurchasePage() {
  return (
    <PageLayoutComponent
      headerHiddenActions
      title=" Thank You For Your Purchase Page"
    ></PageLayoutComponent>
  );
}

ThankYouForYourPurchasePage.defaultProps = {};

ThankYouForYourPurchasePage.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYouForYourPurchasePage);
