import React from 'react'

interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  tooltipMessage?: string
  isOnHover?: boolean
  isOnClick?: boolean
  defaultState?: boolean
}

export const Tooltip = ({
  children,
  tooltipMessage,
  isOnClick,
  isOnHover,
  defaultState = false
}: TooltipProps) => {
  const [showToolTip, setShowTooltip] = React.useState(defaultState)

  const onChangeToolTip = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isOnClick && isOnHover) {
        throw new Error('can only have one')
      }

      if (isOnClick && e.type === 'click') {
        setShowTooltip((prev) => !prev)
      }

      const eventTypes = ['mouseover', 'mouseout']
      if (isOnHover && eventTypes.includes(e.type)) {
        setShowTooltip((prev) => !prev)
      }
    },
    [isOnClick, isOnHover]
  )

  return (
    <div
      onMouseOver={onChangeToolTip}
      onMouseOut={onChangeToolTip}
      onClick={onChangeToolTip}
    >
      {children}
      {showToolTip && (
        <span
          role="tooltip"
          style={{ maxWidth: '150px' }}
          className="py-2 bg-purple-500 text-xs rounded-md px-4 top-12 absolute overflow-auto"
        >
          {tooltipMessage}
        </span>
      )}
    </div>
  )
}
