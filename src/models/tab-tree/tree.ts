import { type Tab } from './tab'
import { TabNode } from './node'
import { RootNode, type ParentNode } from './parent-node'

export class TabTree {
  registry = new Map<string, TabNode >()
  root: ParentNode = new RootNode()

  getNodeUnsafe = (id: string): TabNode => {
    const node = this.registry.get(id)

    if (node === undefined) {
      throw new Error(`Node with id ${id} not found`)
    }

    return node
  }

  private readonly getParent = (parentId: string | null): ParentNode => {
    if (parentId === null) {
      return this.root
    }

    return this.getNodeUnsafe(parentId)
  }

  createNode (tab: Tab, parentId: string | null): void {
    const parent = this.getParent(parentId)

    const tabNode = new TabNode(tab, parent)

    this.registry.set(tabNode.id, tabNode)
  }

  deleteNode (id: string): void {
    const node = this.registry.get(id)
    if (node === undefined) return

    node.parent.deleteChild(node)

    this.registry.delete(id)
  }

  updateNode (id: string, tab: Tab): void {
    const node = this.getNodeUnsafe(id)
    node.updateTab(tab)
  }
}
