import {
  ReactNode,
  Children,
  ReactElement,
  NamedExoticComponent,
  cloneElement,
  useId,
  PropsWithChildren,
} from 'react';

import { FieldProps } from '../interface';
import { classNames } from '../utils';

const getChildByName = (children: ReactNode, displayName: string) => {
  return Children.map<ReactNode, ReactNode>(children, (child) => {
    if (typeof child !== 'object') return null;

    if (
      ((child as ReactElement).type as NamedExoticComponent).displayName ===
      displayName
    )
      return child;

    return null;
  });
};

const getLabel = (children: ReactNode, props: any) => {
  const elements = getChildByName(children, 'Label');
  if (elements?.length === 0) return;
  return cloneElement(elements?.[0] as ReactElement, props);
};

const getInput = (children: ReactNode, props: any) => {
  const elements = getChildByName(children, 'Input');
  if (elements?.length === 0) return;
  const inputProps = (elements?.[0] as ReactElement).props;
  return cloneElement(elements?.[0] as ReactElement, {
    ...inputProps,
    ...props,
  });
};

const getDescription = (children: ReactNode, props: any) => {
  const elements = getChildByName(children, 'Description');
  if (elements?.length === 0) return null;
  return cloneElement(elements?.[0] as ReactElement, props);
};

export default function Field(props: PropsWithChildren<FieldProps>) {
  const { hasError, children, className = '' } = props;
  const fieldId = `field_${useId()}`;

  const label = getLabel(children, { for: fieldId });
  const input = getInput(children, { id: fieldId, hasError });
  const description = getDescription(children, { hasError });

  return (
    <div className={classNames(className)}>
      {label}
      {input}
      {description}
    </div>
  );
}
