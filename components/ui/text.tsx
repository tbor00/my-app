import React from 'react'
import { composeClasses } from 'lib/classes'

export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'span'
export type TextBold = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export interface TextProps {
    className?: string
    style?: React.CSSProperties
    variant?: TextVariant
    bold?: TextBold
    href?: string
    children?: React.ReactNode
}

export const Text = ({ className, variant = 'h1', bold = 'light', children, ...otherProps }: TextProps) => {
    const composedClassName = composeClasses(`font-${bold}`, className)

    switch (variant) {
        case 'h1':
            return (
                <h1 className={composedClassName} {...otherProps}>
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={composedClassName} {...otherProps}>
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3 className={composedClassName} {...otherProps}>
                    {children}
                </h3>
            )
        case 'h4':
            return (
                <h4 className={composedClassName} {...otherProps}>
                    {children}
                </h4>
            )
        case 'h5':
            return (
                <h5 className={composedClassName} {...otherProps}>
                    {children}
                </h5>
            )
        case 'h6':
            return (
                <h6 className={composedClassName} {...otherProps}>
                    {children}
                </h6>
            )
        case 'p':
            return (
                <p className={composedClassName} {...otherProps}>
                    {children}
                </p>
            )
        case 'a':
            return (
                <a className={composedClassName} {...otherProps}>
                    {children}
                </a>
            )
        case 'small':
            return (
                <small className={composedClassName} {...otherProps}>
                    {children}
                </small>
            )
        case 'span':
            return (
                <span className={composedClassName} {...otherProps}>
                    {children}
                </span>
            )
    }
}
