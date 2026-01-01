import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'link' | 'text';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
}: ButtonProps) {
  const baseStyles = 'transition-colors inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#5e8591] px-3 font-oswald font-semibold text-sm text-white uppercase tracking-[0.84px] leading-6 hover:bg-[#4a6970]',
    secondary: 'bg-black px-3 py-3 font-oswald font-semibold text-sm text-white uppercase tracking-[0.84px] leading-6 hover:bg-gray-800',
    link: 'font-oswald font-semibold text-sm text-white/75 uppercase tracking-[0.84px] leading-6 hover:text-white',
    text: 'font-archivo text-white hover:text-white/75',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
