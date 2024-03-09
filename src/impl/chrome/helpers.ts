export const getTabParentId = (tabData: chrome.tabs.Tab): string | null => {
  if (tabData.pendingUrl !== 'chrome://newtab/' && tabData.openerTabId !== undefined) {
    return tabData.openerTabId.toString()
  }

  return null
}
