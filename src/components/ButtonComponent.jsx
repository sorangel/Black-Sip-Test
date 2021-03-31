import PropTypes from "prop-types";
import styles from "../styles/components/buttonComponent.module.scss";

function ButtonComponent({ text, onClick, style }) {
  return (
    <button className={styles.container} style={style} onClick={onClick}>
      <strong className={styles.text}>{text}</strong>
    </button>
  );
}

ButtonComponent.defaultProps = {
  style: {},
};

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default ButtonComponent;
