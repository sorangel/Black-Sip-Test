import { StrictMode } from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";

function Setup({ children, store }) {
  return (
    <StrictMode>
      <Provider store={store}>{children}</Provider>
    </StrictMode>
  );
}

Setup.propTypes = {
  children: PropTypes.node.isRequired,
  store: PropTypes.any.isRequired,
};

export default Setup;
