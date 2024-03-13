import React from 'react'
import { cn } from '../../../utils/basic'

import { Loader } from 'lucide-react'

import * as css from './Spinner.module.scss'

export const Spinner = ({ visible = true, className }: { visible?: boolean, className?: string }): JSX.Element | null => {
  if (!visible) return null

  return (
    <div className={cn(css.spinner, className)}>
        <Loader />
    </div>
  )
}
