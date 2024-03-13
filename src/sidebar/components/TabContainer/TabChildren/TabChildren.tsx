import React from 'react'
import { observer } from 'mobx-react-lite'

import { Collapsible } from '../../Collapsible'
import { TabContainer } from '..'

import * as css from './TabChildren.module.scss'
import { type TabNode } from '../../../../models/tab-tree/node'

export const TabChildren = observer(({ node }: { node: TabNode }): JSX.Element | null => {
  if (node.children.size === 0) return null

  return (
      <div className={css.root}>
        <div className={css.indent} />
        <Collapsible expanded={node.expanded} className={css.list}>
          {[...node.children].map((child) => {
            return <TabContainer node={child} key={child.id}/>
          })}
        </Collapsible>
      </div>
  )
})
