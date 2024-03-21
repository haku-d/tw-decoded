type BaseProps = {
  className?: string;
};

type HasError = {
  hasError?: boolean;
};

export type InputProps = BaseProps &
  HasError & {
    name: string;
    type: string;
    disabled: boolean;
    rounded: boolean;
    shadow: boolean;
    placeholder: string;
    prefix: React.ReactNode | undefined;
    suffix: React.ReactNode | undefined;
    errorMsg: string;
    required?: boolean;
  };

export type FieldProps = BaseProps & HasError;

export type FieldSetProps = BaseProps;

export type DescriptionProps = BaseProps & HasError;
