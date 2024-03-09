import React from 'react'
import { tabsTree } from '../globals'
import { TabContainer } from './TabContainer'

import * as css from './App.module.scss'

export const App = (): JSX.Element => {
  return (
      <div className={css.root}>
        {[...tabsTree.root.children].map(child => {
          return <TabContainer id={child.id} key={child.id} />
        })}
      </div>
  )
}
