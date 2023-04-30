import React from 'react'
import { composeClasses } from 'lib/classes'

const colorVariants: { [key: string]: string } = {
  primary:
    'shadow-lg bg-purple-500 text-white rounded-xl hover:bg-purple-700 py-3 px-3 transition-all hover:-translate-y-0.5',
  secondary: '',
  buttonLink:
    'text-purple-200/75 rounded-xl hover:bg-purple-300/5 hover:text-white py-3 px-3 text-sm',
  outline:
    'shadow-lg outline rounded-xl py-3 px-3 hover:outline-purple-400 hover:-translate-y-0.5 transition-transform'
}

const sizeVariants: { [key: string]: string } = {
  xl: '',
  lg: '',
  md: '',
  sm: ''
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'buttonLink'
  size?: 'xl' | 'lg' | 'md' | 'sm'
  label?: string
  classNameLabel?: string
  styleLabel?: React.CSSProperties
}

export const Button = ({
  variant = 'primary',
  size = 'xl',
  className,
  style,
  label,
  classNameLabel,
  styleLabel,
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      {label && (
        <label
          className={composeClasses(classNameLabel)}
          style={styleLabel || {}}
        >
          {label}
        </label>
      )}
      <button
        className={composeClasses(
          colorVariants[variant],
          sizeVariants[size],
          className
        )}
        style={style}
        {...props}
      >
        {children}
      </button>
    </>
  )
}
