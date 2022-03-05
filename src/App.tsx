import * as React from 'react'
import GlobalStyles from '@/styles/global'
import { hot } from 'react-hot-loader/root'
import { Agrai } from './pages/Agrai'

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Agrai/>
    </>
  )
}

export default hot(App)
