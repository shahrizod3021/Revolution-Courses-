import React from 'react'
import { Link } from 'react-router-dom'

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
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse p-2" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class=" btn btn-outline-light" style={{textDecoration:"none"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kurslar
          </a>
          <ul class="dropdown-menu">
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
