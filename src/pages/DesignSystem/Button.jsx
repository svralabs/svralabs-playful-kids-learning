export default function Button() {
  const buttonVariants = [
    { type: 'primary', label: 'Primary', className: 'bg-primary text-on-primary hover:bg-primary-hover' },
    { type: 'secondary', label: 'Secondary', className: 'bg-secondary text-on-secondary hover:bg-secondary-hover' },
    { type: 'tertiary', label: 'Tertiary', className: 'bg-tertiary text-on-tertiary hover:bg-tertiary-hover' },
    { type: 'outline', label: 'Outline', className: 'border-2 border-outline text-on-surface hover:bg-surface-container' },
    { type: 'text', label: 'Text', className: 'text-primary hover:bg-surface-container' },
  ];

  const buttonSizes = [
    { size: 'small', label: 'Small', className: 'px-3 py-1.5 text-label-sm font-label-sm' },
    { size: 'medium', label: 'Medium', className: 'px-4 py-2 text-label-md font-label-md' },
    { size: 'large', label: 'Large', className: 'px-6 py-3 text-label-lg font-label-lg' },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="font-headline-md text-headline-md text-on-background">Variants</h2>
        <div className="flex flex-wrap gap-4">
          {buttonVariants.map((variant) => (
            <button
              key={variant.type}
              className={`rounded-full transition-colors duration-200 ${variant.className}`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-headline-md text-headline-md text-on-background">Sizes</h2>
        <div className="flex flex-wrap gap-4">
          {buttonSizes.map((size) => (
            <button
              key={size.size}
              className={`bg-primary text-on-primary hover:bg-primary-hover rounded-full transition-colors duration-200 ${size.className}`}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
