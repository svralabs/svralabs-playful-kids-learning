import { useState } from 'react';

export default function ToastAlert() {
  const [toasts, setToasts] = useState([
    { id: 1, type: 'success', message: 'Mission Completed!', icon: 'check_circle' },
    { id: 2, type: 'error', message: 'Oops! Something went wrong.', icon: 'error' },
    { id: 3, type: 'warning', message: 'Warning: Low battery level.', icon: 'warning' },
    { id: 4, type: 'info', message: 'New update available.', icon: 'info' },
  ]);

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  const getToastClasses = (type) => {
    switch (type) {
      case 'success':
        return 'bg-[#dcfce7] text-[#166534] border-[#bbf7d0]';
      case 'error':
        return 'bg-[#fee2e2] text-[#991b1b] border-[#fecaca]';
      case 'warning':
        return 'bg-[#fef9c3] text-[#854d0e] border-[#fef08a]';
      case 'info':
        return 'bg-[#dbeafe] text-[#1e40af] border-[#bfdbfe]';
      default:
        return 'bg-surface-container-highest text-on-surface border-outline-variant';
    }
  };

  const getIconColor = (type) => {
    switch (type) {
      case 'success':
        return 'text-[#15803d]';
      case 'error':
        return 'text-[#dc2626]';
      case 'warning':
        return 'text-[#d97706]';
      case 'info':
        return 'text-[#3b82f6]';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-full px-6 py-4 flex items-center gap-4 border-2 shadow-sm min-w-[300px] ${getToastClasses(toast.type)}`}
          >
            <span className={`material-symbols-outlined ${getIconColor(toast.type)}`} data-icon={toast.icon}>
              {toast.icon}
            </span>
            <span className="font-body-default text-body-default flex-1 font-bold">{toast.message}</span>
            <span
              className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-error transition-colors"
              data-icon="close"
              onClick={() => removeToast(toast.id)}
            >
              close
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
