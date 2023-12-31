'use client'
import { IconType } from "react-icons";

// ----------- Propiedades --------
interface ButtonProps{
  label:string;
  onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;
  disabled?:boolean;
  outline?:boolean;
  small?:boolean;
  Icon?:IconType
}
// ----------- Componente --------

const Button:React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  Icon,
  outline,
  small}) => {
  return (
  <button
  className={`relative disable:opacity-70 disable:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
  ${outline ? 'bg-white':'bg-blue-500'}
  ${outline ? 'border-black':'border-blue-500'}
  ${outline ? 'text-black':'text-white'}
  ${small ? 'py-1':'py-3'}
  ${small ? 'font-light':'font-semibold'}
  ${small ? 'border-[1px]':'border-2'}
  `}
  disabled={disabled}
  onClick={onClick}
  >
    {Icon && (
      <Icon size={24} className="absolute left-4 top-3" />
    )}
    {label}
  </button> );
}

export default Button;