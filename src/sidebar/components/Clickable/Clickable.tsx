import React, { type MouseEventHandler } from 'react'

import { cn } from '../../../utils/basic'

import * as css from './Clickable.module.scss'

export const Clickable = (props: {
  as?: 'span' | 'div' | 'button'
  disabled?: boolean
  padding?: boolean
  className?: string
  tooltip?: string
  onClick?: MouseEventHandler<HTMLElement>
  children: React.ReactNode
}): JSX.Element => {
  if (props.onClick === undefined) {
    return <div className={css.bypass}>{props.children}</div>
  }

  const {
    className,
    disabled = false,
    padding = false,
    tooltip,
    onClick,
    as: Tag = 'span',
    children
  } = props

  return (
    <Tag
        role="button"
        title={tooltip}
        className={cn(
          css.root,
          padding && css.isPadding,
          className
        )}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
    >
        {children}
    </Tag>
  )
}
