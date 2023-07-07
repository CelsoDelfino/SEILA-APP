import React from 'react'
import { Routes, Route} from 'react-router-dom';

import Login from '../pages/login/index';
import cadastro from '../pages/cadastro/index';
import Cadatro from '../pages/cadastro/index';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/cadastro' element={<Cadatro/>}/>
    </Routes>
  )
}
