import React from 'react'
import { Routes, Route} from 'react-router-dom';

import Login from '../login/index';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  )
}
