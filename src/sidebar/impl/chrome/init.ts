import { getTabParentId } from '../../../impl/chrome/helpers'
import { ChromeTab } from '../../../impl/chrome/tab'
import { tabsTree } from '../../globals'

export const init = (): void => {
  chrome.tabs.query({}, tabs => {
    console.log(tabs)

    tabs.forEach(tabData => {
      tabsTree.createNode(new ChromeTab(tabData), getTabParentId(tabData))
    })
  })

  chrome.tabs.onCreated.addListener((tabData) => {
    if (tabData.id === undefined) return

    console.log('created', { tabData })

    tabsTree.createNode(new ChromeTab(tabData), getTabParentId(tabData))
  })

  chrome.tabs.onRemoved.addListener((id) => {
    tabsTree.deleteNode(String(id))
  })

  chrome.tabs.onUpdated.addListener((id, changes, tabData) => {
    const tab = new ChromeTab(tabData)
    console.log('changes', { id, changes, tabData })

    tabsTree.updateNode(String(id), tab)
  })
}
