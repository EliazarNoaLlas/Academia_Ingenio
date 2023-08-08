'use client'

import {  FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps{
  id:string;
  type?:string
  placeholder:string
  disabled?:boolean
  formatPrice?:boolean
  required?:boolean
  isSelect?:boolean
  register:UseFormRegister<FieldValues>
  errors:FieldErrors
}

const Input:React.FC<InputProps> = ({
  id,
  type='text',
  placeholder,
  isSelect,
  disabled,
  formatPrice,
  register,
  required,
  errors
}) => {
  return ( 
    <div className="w-full relative">
      {
        !isSelect ?
          <input
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            placeholder={placeholder}
            type={type}
            className={`
          text-gray-700
          peer
          w-full
          p-2
          font-normal
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disable:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? 'pl-9' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
          />
        :
          <select
            id={id}
            disabled={disabled}
              {...register(id, { required })}
              className={
              `
            text-gray-700
              peer
              w-full
              p-2
              font-normal
              
              bg-white
              border-2
              rounded-md
              outline-none
              transition
              disable:opacity-70
              disabled:cursor-not-allowed
              ${formatPrice ? 'pl-9' : 'pl-4'}
              ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
              ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
            ` }
          >
            <option value="" disabled defaultValue={'Seleccione una opción'}>
              Seleccione un ciclo
            </option>
            <option value="primeraOpcion">PRIMERA OPCION</option>
            <option value="ordinario">ORDINARIO</option>
            <option value="dirimencia">DIRIMENCIA</option>
            <option value="preCuarto">PRE 4TO</option>
            <option value="preTercero">PRE 3RO</option>
          </select>
      }
      
    </div>
   );
}
 
export default Input;