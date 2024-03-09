import { Tab, TabStatus } from '../../models/tab-tree/tab'

export class ChromeTab extends Tab {
  constructor (readonly tab: chrome.tabs.Tab) {
    super()
  }

  private get tabId (): number {
    if (this.tab.id === undefined) throw new Error('Tab id is undefined')

    return this.tab.id
  }

  override get id (): string {
    return this.tabId.toString()
  }

  override get title (): string {
    return this.tab.title ?? ''
  }

  override get favIconUrl (): string {
    return this.tab.favIconUrl ?? ''
  }

  override get active (): boolean {
    return this.tab.active
  }

  override get status (): TabStatus {
    switch (this.tab.status) {
      case 'loading': return TabStatus.Loading
      case 'complete': return TabStatus.Complete
      case 'unloaded': return TabStatus.Unloaded
      default: return TabStatus.Complete
    }
  }

  override open = (): void => {
    chrome.tabs.update(this.tabId, { active: true }).catch((error): void => {
      console.error('Failed to update tab', this.tab, error)
    })
  }
}
