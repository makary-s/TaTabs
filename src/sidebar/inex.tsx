import React from 'react'
import { init } from './impl/chrome/init'

import { TA_TABS_ROOT_ID } from '../constants'
import { createRoot } from 'react-dom/client'
import { App } from './components/App/App'

const rootEl = document.getElementById(TA_TABS_ROOT_ID)
if (rootEl === null) throw new Error('root element not found')

const root = createRoot(rootEl)

init()
root.render(<App/>)
