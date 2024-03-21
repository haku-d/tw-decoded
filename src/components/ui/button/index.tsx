import { ReactNode } from 'react';
import clsx from 'clsx';

import { ButtonBaseCls } from '../base';

export interface ButtonProps {
  type?: 'default' | 'primary' | 'danger' | 'link';
  disabled?: boolean;
  rounded?: boolean;
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    rounded = true,
    disabled = false,
    type = 'default',
  } = props;

  return (
    <button
      className={clsx([
        ButtonBaseCls,
        'bg-primary',
        'text-white',
        'shadow-btn-primary',
        rounded && 'rounded-md',
      ])}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
