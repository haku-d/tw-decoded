import { PropsWithChildren } from 'react';

type LabelProps = {
  for?: string;
};

export default function Label(props: PropsWithChildren<LabelProps>) {
  return (
    <label
      htmlFor={props.for}
      className="select-none text-sm text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
    >
      {props.children}
    </label>
  );
}
