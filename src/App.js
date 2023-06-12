import React from 'react'





import AdUser from './pages/Admin/User'
import Adpj from'./pages/Admin/ProjetAdmin'
import Adtask from './pages/Admin/tasksAdmin'
import Adhom from './pages/Admin/Homeadmin'




import Mgrpj from './pages/Mgr/projetmgr'
import Mgrtask from './pages/Mgr/MgrTasks'
import Mgrhom from './pages/Mgr/Homemgr'

import Ushom from './pages/user/Home'
import Uspj from './pages/user/Projets'
import Ustask from './pages/user/tasks'
import UsProfil from './pages/user/UsProfil'

import {Routes,Route,BrowserRouter} from "react-router-dom"
import Log from './pages/login'

export default function App  ()  {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/AdUser" exact element={<AdUser></AdUser>}> </Route>
        <Route path="/Adpj" exact element={<Adpj></Adpj>}> </Route>
        <Route path="/Adtask" exact element={<Adtask></Adtask>}> </Route>
        <Route path="/Adhom" exact element={<Adhom></Adhom>}> </Route>


        <Route path="/Mgrpj" exact element={<Mgrpj></Mgrpj>}> </Route>
        <Route path="/Mgrtask" exact element={<Mgrtask></Mgrtask>}> </Route>
        <Route path="/Mgrhom" exact element={<Mgrhom></Mgrhom>}> </Route>

        <Route path="/Uspj" exact element={<Uspj></Uspj>}> </Route>
        <Route path="/Ustask" exact element={<Ustask></Ustask>}> </Route>
        <Route path="/Ushom" exact element={<Ushom></Ushom>}> </Route>
        <Route path="/Usprofil" exact element={<UsProfil></UsProfil>}> </Route>

        <Route path="/" exact element={<Log></Log>}> </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}
