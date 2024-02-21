import React, { forwardRef, useMemo, useState } from 'react';
import clsx from 'clsx';

import { InputBaseCls } from '../base';

export interface InputProps {
  name: string;
  type: string;
  disabled: boolean;
  rounded: boolean;
  placeholder: string;
  prefix: React.ReactNode | undefined;
  suffix: React.ReactNode | undefined;
}

export type InputRef = HTMLInputElement;

const Input = forwardRef<InputRef, InputProps>(function Input(
  props,
  ref
): React.ReactNode {
  const {
    type = 'text',
    name,
    disabled = false,
    rounded = true,
    prefix,
    suffix,
    ...rest
  } = props;
  const inputCls = clsx([
    InputBaseCls,
    rounded && 'rounded-md',
    disabled &&
      'cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none',
  ]);
  const [focused, setFocused] = useState(false);

  const toggleFocus = () => {
    setFocused(!focused);
  };

  const hasPrefix = useMemo(() => {
    if (prefix && prefix !== '') return true;
    return false;
  }, [prefix]);

  const hasSuffix = useMemo(() => {
    if (suffix && suffix !== '') return true;
    return false;
  }, [suffix]);

  const _suffix = useMemo(() => {
    if (!hasSuffix) return;
    return React.cloneElement(suffix as React.ReactElement<any>, {
      className: clsx([
        'h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm',
        disabled && 'cursor-not-allowed',
      ]),
      disabled: disabled,
    });
  }, [hasSuffix, suffix, disabled]);

  return (
    <div
      className={clsx([
        'relative',
        'flex',
        'mt-2',
        'shadow-sm',
        'ring-1',
        'ring-inset',
        rounded && 'rounded-md',
        focused ? 'ring-blue-500' : 'ring-gray-200',
        disabled && 'ring-0 bg-gray-50 cursor-not-allowed',
      ])}
    >
      {hasPrefix && (
        <div className="pointer-events-none flex items-center inset-y-0 flex-none pl-3">
          <span className="text-gray-500 sm:text-sm">{prefix}</span>
        </div>
      )}
      <input
        ref={ref}
        type={type}
        name={name}
        disabled={disabled}
        className={inputCls}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        {...rest}
      />
      {hasSuffix && (
        <div className="flex-none inset-y-0 right-0 flex items-center">
          {_suffix}
        </div>
      )}
    </div>
  );
});

export default Input;
