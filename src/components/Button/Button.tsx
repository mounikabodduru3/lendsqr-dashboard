import { ButtonHTMLAttributes, ReactNode } from 'react'
import './button.style.scss'

// Button Props
type ButtonProps = {
  children: ReactNode;
  buttonType: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonTypeClasses: Record<string, string> = {
  default: 'default',
  blacklist: 'blacklist',
  activate: 'activate',
  filter: 'filter',
  reset: 'reset',
};

const Button = ({ children, buttonType, ...otherProps }: ButtonProps) => {
  return (
    <button className={`button-container ${buttonTypeClasses[buttonType]}`} {...otherProps}>
      {children}
    </button>
  );
};


export default Button