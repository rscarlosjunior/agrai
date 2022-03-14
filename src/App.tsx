import * as React from 'react'
import GlobalStyles from '@/styles/global'
import { hot } from 'react-hot-loader/root'
import AgraiRoutes from './router'
import { ContentProvider } from './context/content'

function App() {
  
  return (
    <>
      <GlobalStyles />
      <ContentProvider>
        <AgraiRoutes/>
      </ContentProvider>
    </>
  )
}

export default hot(App)
