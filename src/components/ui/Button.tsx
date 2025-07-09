import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: Props) {
  const variantClasses: Record<string, string> = {
    primary: 'bg-amber-700 text-white hover:bg-amber-800 shadow-sm',
    secondary: 'bg-slate-600 text-white hover:bg-slate-700',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };
  const sizeClasses: Record<string, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };
  return (
    <button
      {...rest}
      className={clsx('rounded transition', variantClasses[variant], sizeClasses[size], className)}
    />
  );
}
