import React from 'react'
import { TabContent } from './TabContent'
import { TabChildren } from './TabChildren'
import { type TabNode } from '../../../models/tab-tree/node'

export const TabContainer = ({ node }: { node: TabNode }): JSX.Element => {
  return (
      <div>
        <TabContent node={node} />
        <TabChildren node={node}/>
      </div>
  )
}
