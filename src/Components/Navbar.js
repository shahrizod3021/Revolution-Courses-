import React from 'react'
import { Link } from 'react-router-dom'
import  './style.css'
export default function Navbar() {

    const course = [
        {name:"Web Dasturlash", link:"/"},
        {name:"Arxitektura va dizayn, 3d modeli", link:"/architextute"},
        {name:"Grafik dizayn", link:"/graphicdesign"},
        {name:"Kompyuter Savodxonligi", link:"/kompyutersavodxonligi"},
        {name:"Kompyuter yig'ish", link:"/kompyuteryigish"},
        {name:"Video Montaj", link:"/vdmontaj"},
    ]

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <button className="menu-list navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="kurs btn btn-outline-light" style={{textDecoration:"none"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kurslar
          </a>
          <ul className="dropdown-menu">
            {course.map(item => (
                <li ><Link className='dropdown-item btn btn-outline-warning ' to={item.link}>{item.name}</Link></li>
            ))}
          </ul>
        </li>
    
      </ul>

      <h3>Revolution <span className='text-light'>Academy</span></h3>
      
    </div>
  </div>
</nav>
    </div>
  )
}
