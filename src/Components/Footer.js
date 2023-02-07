import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
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
        {name:"Telegram: Dilshodbek_farhodjonov", link:"https://t.me/Dilshodbek_farhodjonov"},
        {name:"Instagram revolution_akademy", link:"https://www.instagram.com/revolution_akademy"},
        
        {name:"Web Site: www.revalution_academy.com", link:"/"}

    ]

  return (
    <div className='ota  mt-5 w-100 d-flex align-items-center justify-content-center'>
      <div className='bola w-33.3 m-4'>
        <h1 className='mb-5 text-warning'>Revalution <span className='text-warning'>Academy</span></h1>
        <h4 className='a text-light'>Telefon raqam:</h4>
        <div className='a d-flex align-items-center '>
        <i class="text-light bi bi-telephone" style={{fontSize:"30px"}}></i><h3 className='text-light'>+998 (91) 322 55 44</h3>
        </div>
        <div className='a d-flex align-items-center '>
        <i style={{fontSize:"30px", marginRight:"3%"}} class="text-light bi bi-instagram"></i><h4 className='text-light'>Instagram accaunt:</h4>
        </div>
        <a href='https://www.instagram.com/revolution_akademy/' className="btn"><h5 className='a text-light' style={{padding:"10px"}}>Revolution_academy</h5></a>
        
      </div>
      <div className='bola w-33.3 m-5 mb-1'>
        <h3 className='mb-4 text-warning'>Bizning kurslar</h3>
        {course.map(item =>(
          <div className='w-100 mb-1'>
            <Link className='btn text-start btn-outline-warning' to={item.link}>{item.name}</Link>
          </div>
        ))}
      </div>
      <div className='bola w-33.3 m-5 mb-5'>
        <h4 className='text-warning'>Ijtimoiy Tarmoqlarimiz</h4>
        <br/>
        <br/>
        {links.map(item => (
            <div className='w-100'>
                <Link className='btn  mb-2 text-light' to={item.link}><h5>{item.name}</h5></Link>
            </div>
        ))}
      </div>
    </div>
  )
}
