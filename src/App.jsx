import React,{ useState } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import UserContext,{ UserDataContext } from './components/context/UserContext'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function App() {

  return  <>
    <div id='wrapper'>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Routes>
                <Route path='/content' element={<UserContext><Content /></UserContext>} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>

  </>
   
}
    
export default App
