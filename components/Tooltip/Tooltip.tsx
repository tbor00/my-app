import React from 'react'

interface TooltipProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
    tooltipMessage?: string
    isOnHover?: boolean
    isOnClick?: boolean
    defaultState?: boolean
}

export const Tooltip = ({ children, tooltipMessage, isOnClick, isOnHover, defaultState }: TooltipProps) => {
    const [showToolTip, setShowTooltip] = React.useState(defaultState ?? false)

    const changeValidator = React.useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (isOnClick && isOnHover) {
                throw new Error('can only have one')
            }

            if (isOnClick && e.type === 'click') {
                setShowTooltip((prev) => !prev)
            }

            if (isOnHover && e.type === 'mouseover') {
                setShowTooltip((prev) => !prev)
            }
        },
        [isOnClick, isOnHover]
    )

    return (
        <>
            {showToolTip && <span className="bg-purple-700 z-50 text-sm rounded-md px-2 top-12 absolute">{tooltipMessage}</span>}
            <div onMouseOver={changeValidator} onMouseOut={changeValidator} onClick={changeValidator}>
                {children}
            </div>
        </>
    )
}
