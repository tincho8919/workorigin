


import Footer from './componentes/Footer'
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home'
import Principal from './componentes/Principal'
import Api from './componentes/Api'
import Productos from './componentes/Productos'
import Error from './componentes/Error'
import Navegador from './componentes/Navegador'

function App() {

  return (
    <>
    <Navegador />
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/principal' element={<Principal />}></Route>
      <Route path='/api' element={<Api />}></Route>
      <Route path='/productos' element={<Productos />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
