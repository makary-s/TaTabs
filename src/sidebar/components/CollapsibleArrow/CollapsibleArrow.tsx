import React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../../utils/basic'

import * as css from './CollapsibleArrow.module.scss'

export const CollapsibleArrow = ({ collapsed, className }: { collapsed: boolean, className?: string }): JSX.Element => {
  return (
    <ChevronDown className={cn(
      css.root,
      collapsed && css.isCollapsed,
      className
    )} />
  )
}
