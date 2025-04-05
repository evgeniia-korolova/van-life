import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Vans from './pages/Vans'

import '../server'

function App() {
  

  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/van-life'}>
      {/* <BrowserRouter > */}
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
