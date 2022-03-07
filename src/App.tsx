import * as React from 'react'
import GlobalStyles from '@/styles/global'
import { hot } from 'react-hot-loader/root'
import AgraiRoutes from './router'

function App() {
  
  return (
    <>
      <GlobalStyles />
      <>
        <AgraiRoutes/>
      </>
    </>
  )
}

export default hot(App)
