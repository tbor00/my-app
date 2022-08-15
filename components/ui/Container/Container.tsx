import React, { CSSProperties } from 'react'

export interface ContainerProps {
    className?: string
    style?: CSSProperties
    children?: React.ReactNode
}


export const Container = ({className, style, children}: ContainerProps) => {
    return (
        <div className={`container mx-auto ${className?? ''}`} style={style} >
            {children}
        </div>
    )
}