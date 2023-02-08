import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import CoursLayout from './Layout/CoursLayout';
import Arxitektura from './Pages/Arxitektura';
import Grafik from './Pages/Grafik';
import Kompyigish from './Pages/Kompyigish';
import Komsavodxonligi from './Pages/Komsavodxonligi';
import Vdmontaj from './Pages/Vdmontaj';
import WebDasturlash from './Pages/WebDasturlash';
import Login from "./Pages/Login";
import Admin from "./Pages/Admin/Admin";
import AdminLayout from "./Pages/Admin/AdminLayout";
import AddCourse from "./Pages/Admin/AddCourse";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CoursLayout />}>
            <Route index element={<WebDasturlash />}/>
            <Route path='/graphicdesign' element={<Grafik />}/>
            <Route path='/architextute' element={<Arxitektura />}/>
            <Route path='/kompyutersavodxonligi' element={<Komsavodxonligi />} />
            <Route path='/kompyuteryigish' element={<Kompyigish />} />
            <Route path='/vdmontaj' element={<Vdmontaj />} />
              <Route path='/login' element={<Login />}/>
            <Route path={'/addcourse'} element={<AddCourse />} />
          </Route>
          <Route path={'/admin'} element={<AdminLayout />}>
            <Route index element={<Admin />}/>
          </Route>
            <Route path='/admin' element={<Admin />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
