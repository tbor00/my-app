import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'xl' | 'lg' | 'md' | 'sm'
    label?: string
    classNameLabel?: string
    styleLabel?: React.CSSProperties
    ref?: any
}

export const Button = ({ variant, size, className, style, label, classNameLabel, styleLabel, children, ...props }: ButtonProps) => {
    const defineClassName: () => string = React.useCallback(() => {
        const colorVariants: { [key: string]: string } = {
            primary: '',
            secondary: '',
            outline: ''
        }

        const sizeVariants: { [key: string]: string } = {
            xl: '',
            lg: '',
            md: '',
            sm: ''
        }

        const defaultColor = colorVariants[variant as string] || colorVariants.primary
        const defaultSize = sizeVariants[size as string] || sizeVariants.xl

        return `${className ?? ''} ${defaultColor}  ${defaultSize}`
    }, [variant, size, className])

    return (
        <>
            {label && (
                <label className={classNameLabel ?? ''} style={styleLabel ?? {}}>
                    {label}
                </label>
            )}
            <button className={defineClassName()} style={style} {...props}>
                {children}
            </button>
        </>
    )
}
