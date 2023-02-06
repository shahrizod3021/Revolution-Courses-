import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {

    const course = [
        {name:"Web Dasturlash", link:"/"},
        {name:"Arxitektura va dizayn, 3d modeli", link:"/architextute"},
        {name:"Grafik dizayn", link:"/graphicdesign"},
        {name:"Kompyuter Savodxonligi", link:"/kompyutersavodxonligi"},
        {name:"Kompyuter yig'ish", link:"/kompyuteryigish"},
        {name:"Video Montaj", link:"/vdmontaj"},
    ]

    const links =[
        {name:"Telegram: @shahrizodmirzaaliyev", link:"@shahrizodmirzaaliyevdev"},
        {name:"Instagram @bahromovich_ali", link:"@bahromovich_ali"},
        {name:"Facebook: yo'q", link:"yo'q"},
        {name:"Web Site: www.revalution_academy.com", link:"/"}

    ]

  return (
    <div className='container mt-5 col-12 d-flex align-items-center'>
      <div className='col-4 m-4'>
        <h1 className='mb-5'>Revalution <span className='text-warning'>Academy</span></h1>
        <h4>Telefon raqam:</h4>
        <div className='d-flex align-items-center '>
        <i class=" bi bi-telephone" style={{fontSize:"30px"}}></i><h3>+998 (98) 000 97 92</h3>
        </div>
        <div className='d-flex align-items-center'>
        <i style={{fontSize:"30px", marginRight:"3%"}} class="bi bi-envelope"></i> <h4>Email adresss:</h4>
        </div>
        <h5>shahrizodmirzaaliyevdev@gmail.com</h5>
        
      </div>
      <div className='col-4 m-4'>
        <h3 className='mb-4 text-warning'>Our Courses</h3>
        <br/>
        {course.map(item =>(
            <Link className='btn text-start btn-outline-warning' to={item.link}>{item.name}</Link>
        ))}
      </div>
      <div className='col-4 m-4'>
        
        <h4 className='text-warning'>Ijtimoiy Tarmoqlarimiz</h4>
        <br/>
        <br/>
        {links.map(item => (
            <div className='w-100'>
                <Link className='btn' to={item.link}>{item.name}</Link>
            </div>
        ))}
      </div>
    </div>
  )
}
