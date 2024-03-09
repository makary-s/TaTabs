import { action, makeObservable, observable } from 'mobx'
import { type TabNode } from './node'

export class ParentNode {
  @observable children = new Set<TabNode>()

  @action
  addChild (tabNode: TabNode): void {
    tabNode.parent.deleteChild(tabNode)

    this.children.add(tabNode)
  }

  @action
  deleteChild (tabNode: TabNode): void {
    this.children.delete(tabNode)
  }

  constructor () {
    makeObservable(this)
  }
}

export class RootNode extends ParentNode {}
