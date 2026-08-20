import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children, variant, size }) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const badgeClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <span className={badgeClasses}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Badge.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Badge;
