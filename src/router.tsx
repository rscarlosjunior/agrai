import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { About } from './pages/About'
import { ProductorRegister } from './pages/ProductorRegister'
import { ClientRegister } from './pages/ClientRegister'
import { Agrai } from './pages/Home'

const AgraiRoutes = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" render={() => <Agrai />} />
        <Route exact path="/sobre" render={() => <About />} />
        <Route
          exact
          path="/cadastro-produtor"
          render={() => <ProductorRegister />}
        />
        <Route
          exact
          path="/cadastro-cliente"
          render={() => <ClientRegister />}
        />
    </BrowserRouter>
  )
}

export default AgraiRoutes
