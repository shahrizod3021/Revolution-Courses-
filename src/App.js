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
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
