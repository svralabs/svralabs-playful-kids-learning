import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder, value, onChange, size, disabled }) => {
  const baseClasses = 'w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500';
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const inputClasses = `${baseClasses} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={inputClasses}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
  size: 'md',
  disabled: false,
};

export default Input;
