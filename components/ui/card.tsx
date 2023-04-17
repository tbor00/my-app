import React from 'react'
import Image from 'next/image'
import { composeClasses } from 'lib/classes'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string
    effectDirection?: 'y' | 'x'
}

export const Card = ({ children, className, imageUrl, effectDirection = 'x', ...otherProps }: CardProps) => {
    return (
        <div
            className={composeClasses(
                'glass-purple py-3 px-3 p-2 shadow-xl',
                'transition-all',
                'hover:shadow-purple-500',
                effectDirection === 'x' ? 'hover:translate-x-1' : 'hover:-translate-y-1',
                className
            )}
            {...otherProps}
        >
            {imageUrl && (
                <div className="flex items-center justify-center mb-4">
                    <Image src={imageUrl} className="rounded-xl" width="300px" height={'200px'} alt="" />
                </div>
            )}
            {children}
        </div>
    )
}
