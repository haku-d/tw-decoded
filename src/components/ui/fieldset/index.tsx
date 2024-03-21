import React, { PropsWithChildren } from 'react';

import { classNames } from '../utils';
import { FieldSetProps, DescriptionProps } from '../interface';

export function Description({
  children,
  hasError,
}: PropsWithChildren<DescriptionProps>) {
  const cls = classNames(
    'mt-2 text-sm data-[disabled]:opacity-50 sm:text-sm/6',
    hasError ? 'text-red-500' : 'text-zinc-500 dark:text-zinc-400'
  );

  return <p className={cls}>{children}</p>;
}

export function FieldSet({ children }: PropsWithChildren<FieldSetProps>) {
  return <div>{children}</div>;
}
