import React from 'react'
import { Route, Routes } from 'react-router'
import Banner  from './components/Banner/Banner'
import { Main } from './consts/theme'
import CharDetails from './pages/CharDetails'
import Home from './pages/Home'


const App = () => {
  return (
    <Main>
      <Banner/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<CharDetails/>} />
      </Routes>
    </Main>
  )
}

export default App