import { type Tab } from './tab'
import { ParentNode } from './parent-node'
import { action, makeObservable, observable } from 'mobx'

export class TabNode extends ParentNode {
  id: string

  @observable tab: Tab
  @observable expanded = true

  parent: ParentNode

  constructor (tab: Tab, parent: ParentNode) {
    super()

    this.parent = parent
    this.tab = tab
    this.id = tab.id

    parent.addChild(this)

    makeObservable(this)
  }

  @action
  updateTab (tab: Tab): void {
    this.tab = tab
  }

  @action
    toggleExpanded = (): void => {
      this.expanded = !this.expanded
    }
}
