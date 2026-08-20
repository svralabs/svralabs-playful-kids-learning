import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, variant, size }) => {
  const baseClasses = 'rounded-lg shadow-md overflow-hidden';
  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-gray-200',
  };
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Card.defaultProps = {
  variant: 'default',
  size: 'md',
};

export default Card;
