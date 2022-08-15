import Image from 'next/image'
import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    imageUrl?: string
    effectDirection?: 'y' | 'x'
}

export const Card = ({ children, className, imageUrl, effectDirection = 'x', ...props }: CardProps) => {
    const composeStyles = React.useCallback(() => {
        const defaultStyle = 'glass-purple py-3 px-3 p-2 shadow-xl'
        const transition = 'transition-all'
        const hover = `hover:shadow-purple-500 ${effectDirection === 'x' ? 'hover:translate-x-1' : 'hover:-translate-y-1'}`

        return `${defaultStyle} ${hover} ${transition}`
    }, [effectDirection])

    return (
        <div className={`${className ?? ''} ${composeStyles()}`} {...props}>
            {imageUrl && (
                <div className="flex items-center justify-center mb-4">
                    <Image src={imageUrl} className="rounded-xl" width="300px" height={'200px'} alt="" />
                </div>
            )}
            {children}{' '}
        </div>
    )
}
