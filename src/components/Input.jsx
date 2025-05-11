import styles from './Input.module.css';
import PropTypes from 'prop-types';

export default function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  textarea = false,
  ...rest
}) {
  return (
    <div className={styles.group}>
      <label htmlFor={styles.id} className={styles.label}>
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          className={styles.textarea}
          {...rest}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          {...rest}
        />
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  textarea: PropTypes.bool,
};
