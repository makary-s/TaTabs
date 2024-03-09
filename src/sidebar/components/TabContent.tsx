import React from 'react'
import { ChevronRight, LoaderCircle } from 'lucide-react'
import { join } from '../../utils/basic'
import { TabStatus } from '../../models/tab-tree/tab'
import { observer } from 'mobx-react-lite'
import { tabsTree } from '../globals'

import * as css from './TabContent.module.scss'

console.log(css)
export const TabContent = observer(({ id }: { id: string }): JSX.Element => {
  const node = tabsTree.getNodeUnsafe(id)

  return (
      <div
        className={join([
          css.root,
          node.children.size !== 0 && css.isHasChildren,
          node.expanded ? css.isExpanded : css.isCollapsed,
          css[`isStatus${node.tab.status}` as const],
          node.tab.active && css.isActive
        ])}
        onClick={node.tab.open}
      >
        <div className={css.point}>
          <img src={node.tab.favIconUrl}/>
          <div
            className={css.expandButton}
            onClick={node.toggleExpanded}
          >
            <ChevronRight size={15}/>
          </div>
          {node.tab.status === TabStatus.Loading && (
            <div className={css.spinner}>
              <LoaderCircle />
            </div>
          )}
        </div>
        <div className={css.title}>
          {node.tab.title}
        </div>
      </div>
  )
})
