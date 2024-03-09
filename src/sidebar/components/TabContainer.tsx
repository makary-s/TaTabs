import React from 'react'
import { Collapsible } from './Collapsible'
import { observer } from 'mobx-react-lite'
import { tabsTree } from '../globals'
import { TabContent } from './TabContent'

import * as css from './TabContainer.module.scss'

export const TabContainer = observer(({ id }: { id: string }): JSX.Element => {
  const node = tabsTree.getNodeUnsafe(id)

  return (
      <div>
          <TabContent id={id} />
          <div className={css.childrenRoot}>
              <div className={css.childrenIndent} />
              <Collapsible expanded={node.expanded} className={css.childrenList}>
                {[...node.children].map((child) => {
                  return <TabContainer id={child.id} key={child.id}/>
                })}
              </Collapsible>
          </div>
      </div>
  )
})
