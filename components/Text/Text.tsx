import React from 'react'

type variants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a' | 'small' | 'span'
type bolds = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'

export interface TextProps {
    className?: string
    style?: React.CSSProperties
    variant?: variants
    bold?: bolds
    href?: string
    children?: React.ReactNode
}

export const Text = ({ className, style, variant, bold, href, children, ...moreProps }: TextProps) => {
    const defineClassName = React.useCallback(() => {
        const defaultCn = className ?? ''
        const defaultBold = `font-${bold ?? 'light'}`
        return `${defaultCn} ${defaultBold}`
    }, [className, bold])

    const textStyle = style ?? {}

    switch (variant) {
        case 'h1':
            return (
                <h1 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h1>
            )
        case 'h2':
            return (
                <h2 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h2>
            )
        case 'h3':
            return (
                <h3 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h3>
            )
        case 'h4':
            return (
                <h4 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h4>
            )
        case 'h5':
            return (
                <h5 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h5>
            )
        case 'h6':
            return (
                <h6 className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </h6>
            )
        case 'p':
            return (
                <p className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </p>
            )
        case 'a':
            return (
                <a href={href} className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </a>
            )
        case 'small':
            return (
                <small className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </small>
            )
        case 'span':
            return (
                <span className={defineClassName()} style={textStyle} {...moreProps}>
                    {children}
                </span>
            )
    }
}
