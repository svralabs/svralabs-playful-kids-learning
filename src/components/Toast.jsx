import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ message, variant, onClose }) => {
  const variantClasses = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  };

  const toastClasses = `fixed top-4 right-4 p-4 rounded-md shadow-lg ${variantClasses[variant]}`;

  return (
    <div className={toastClasses}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          className="ml-4 text-white hover:text-gray-200"
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  onClose: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  variant: 'info',
};

export default Toast;
