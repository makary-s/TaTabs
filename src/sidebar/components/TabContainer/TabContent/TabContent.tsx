import React from 'react'
import { join } from '../../../../utils/basic'
import { observer } from 'mobx-react-lite'

import * as css from './TabContent.module.scss'
import { type TabNode } from '../../../../models/tab-tree/node'
import { Spinner } from '../../Spinner'
import { Clickable } from '../../Clickable'
import { CollapsibleArrow } from '../../CollapsibleArrow'
import { TabStatus } from '../../../../models/tab-tree/tab'

export const TabContent = observer(({ node }: { node: TabNode }): JSX.Element => {
  const hasChildren = node.children.size !== 0
  const classNames = [
    css.root,
    css[`isStatus${node.tab.status}`],
    hasChildren && css.hasChildren,
    node.tab.active && css.isActive
  ]

  return (
    <div
      className={join(classNames)}
      onClick={node.tab.open}
    >
      <div className={css.point}>
        <img src={node.tab.favIconUrl} className={css.icon} />
        {hasChildren && (
            <Clickable
              onClick={node.toggleExpanded}
              className={css.arrow}
          >
              <CollapsibleArrow collapsed={!node.expanded}/>
          </Clickable>
        )}
        <Spinner
            visible={node.tab.status === TabStatus.Loading}
            className={css.spinner}
        />
      </div>
      <div className={css.title}>
        {node.tab.title}
      </div>
    </div>
  )
})
