import React from 'react';
import PropTypes from 'prop-types';

const Skeleton = ({ variant, width, height }) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  const variantClasses = {
    text: 'w-full h-4',
    circular: 'rounded-full',
    rectangular: '',
  };

  const skeletonClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <div
      className={skeletonClasses}
      style={{ width, height }}
    />
  );
};

Skeleton.propTypes = {
  variant: PropTypes.oneOf(['text', 'circular', 'rectangular']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Skeleton.defaultProps = {
  variant: 'text',
  width: '100%',
  height: '1rem',
};

export default Skeleton;
