import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({
  type = 'button',
  variant = 'primary',
  children,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'danger']),
  children: PropTypes.node.isRequired,
};
