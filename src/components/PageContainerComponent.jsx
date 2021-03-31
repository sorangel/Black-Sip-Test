import PropTypes from "prop-types";
import styles from "../styles/components/pageContainerComponent.module.scss";

function PageContainerComponent({ title = "" }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

PageContainerComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageContainerComponent;
