import { OptionHTMLAttributes, ReactNode } from 'react';

interface Props extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

const Option = ({ children, ...rest }: Props) => {
  return <option {...rest}>{children}</option>;
};

export default Option;
