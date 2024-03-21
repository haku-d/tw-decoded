import React, { ReactElement, forwardRef, useMemo, useState } from 'react';
import clsx from 'clsx';

import { InputBaseCls } from '../base';
import { InputProps } from '../interface';

type InputRef = HTMLInputElement;

const Input = forwardRef<InputRef, Partial<InputProps>>(function Input(
  props,
  ref
): React.ReactNode {
  const {
    type = 'text',
    name,
    disabled = false,
    required = false,
    hasError = false,
    shadow = true,
    className = '',
    prefix,
    suffix,
    ...rest
  } = props;
  const [focused, setFocused] = useState(false);
  const inputWrapperCls = clsx([
    'relative',
    'flex',
    shadow && 'shadow-sm',
    'ring-1',
    'ring-inset',
    'ring-gray-200',
    'focus-within:ring-blue-500',
    className,
    focused && 'z-10',
    disabled && 'ring-0 bg-gray-50 cursor-not-allowed',
    hasError && 'ring-red-500 focus-within:ring-red-500',
  ]);
  const inputCls = clsx([
    InputBaseCls,
    'peer',
    hasError && 'text-red-500',
    disabled &&
      'cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none',
  ]);
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
    return suffix;
    // if (typeof suffix !== 'object') return suffix;
    // const inputProps = (suffix as ReactElement).props;
    // return React.cloneElement(suffix as React.ReactElement<any>, {
    //   className: clsx([
    //     'h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-1 focus:ring-inset focus:ring-blue-500 sm:text-sm',
    //     disabled && 'cursor-not-allowed',
    //     inputProps.className,
    //   ]),
    //   disabled: disabled,
    // });
  }, [hasSuffix, suffix, disabled]);

  return (
    <div className={inputWrapperCls}>
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
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {hasSuffix && (
        <div className="flex-none inset-y-0 right-0 flex items-center">
          {_suffix}
        </div>
      )}
      {hasError && (
        <div className="absolute text-red-500 -right-6 top-0 bottom-0 flex-none inset-y-0 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
