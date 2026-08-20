export default function LoaderSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-surface-container rounded-lg p-6 border-2 border-surface-variant">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="h-6 bg-surface-variant rounded w-3/4"></div>
          <div className="h-4 bg-surface-variant rounded w-full"></div>
          <div className="h-4 bg-surface-variant rounded w-5/6"></div>
          <div className="h-4 bg-surface-variant rounded w-4/5"></div>
        </div>
      </div>
      <div className="bg-surface-container rounded-lg p-6 border-2 border-surface-variant">
        <div className="animate-pulse flex flex-col gap-4">
          <div className="h-6 bg-surface-variant rounded w-3/4"></div>
          <div className="h-4 bg-surface-variant rounded w-full"></div>
          <div className="h-4 bg-surface-variant rounded w-5/6"></div>
          <div className="h-4 bg-surface-variant rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
