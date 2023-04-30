import React, { CSSProperties } from 'react'
import { composeClasses } from 'lib/classes'

export interface ContainerProps {
  className?: string
  style?: CSSProperties
  children?: React.ReactNode
}

export const Container = ({ className, style, children }: ContainerProps) => {
  return (
    <div
      className={composeClasses('container mx-auto', className)}
      style={style}
    >
      {children}
    </div>
  )
}
