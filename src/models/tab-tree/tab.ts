export enum TabStatus {
  Loading = 'loading',
  Complete = 'complete',
  Unloaded = 'unloaded'
}

export abstract class Tab {
  abstract id: string
  abstract title: string
  abstract open: () => void
  abstract favIconUrl: string
  abstract status: TabStatus
  abstract active: boolean
}
