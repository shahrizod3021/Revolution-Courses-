import React, { useState } from 'react'
import w1 from './images/w1.webp'
import w2 from './images/w2.webp'
import w3 from './images/w3.jpg'
import {Toast, ToastBody, ToastHeader, Button} from 'reactstrap'


export default function WebDasturlash() {
  const [toast, setToast] = useState(false)
  const [toast1, setToast1] = useState(false)
  const [toast2, setToast2] = useState(false)
const showToast = ()=>{
  setToast(!toast)
}
const showToast1 = ()=>{
  setToast1(!toast1)
}
const showToast2 = ()=>{
  setToast2(!toast2)
}


  return (
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={w1} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={w2} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={w3} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='container align-items-center justify-content-center mt-5'>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Kurs haqida
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Web dasturlash kursi bu Google ijtimoiy tarmog'lariga dasturlar har xil ilovalarni yaratishni o'rgatiladigan kurs bo'lib, ushbu kursda har bir inson o'z fikrlash doirasini oshirishi va kuchli logikaga ega bo'lishadi. Ushbu kursda biz sizni sertifikat bilan ta'minlaymiz va Ishga joylashishingizga yordam beramiz </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kursning narxi 500ming so'm bo'lib,  to'lov har oyning 10 sanasigacha to'laniladi<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurs davomiyligi 10 oy va ushbu muddat o'tgandan so'ng 2 oy davomida amaliyot o'tash jarayoni boshlanadi.</div>
    </div>
  </div>
</div>
</div>

<h1 className='text-center mt-5'>Nimalarni o'rganamiz</h1>
<div className='container col-12 d-flex align-items-center justify-content-center mt-5'>
    
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt={""} />
        <div className='card-body'>
            <p className='card-text'>Backend</p>
            <p className='card-text'>ushbu bo'limda biz Java dasturlash tilini mukammal tarzda o'rganamiz.Davomiyligi 6oy</p>
            <div>
  <Button
    color="primary"
    onClick={()=>showToast()}
  >
    Ko'roq ma'lumot
  </Button>
  <br />
  <br />
  <Toast isOpen={toast}>
    <ToastHeader toggle={()=>showToast()}>
      Backend haqida
    </ToastHeader>
    <ToastBody>
      Backend bu web sitelarning ichki qismi bo'lib tekshiruv ishlarini olib boradi, va eng logikali qismi hisoblanadi 
    </ToastBody>
  </Toast>
</div>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt={"sa"} />
        <div className='card-body'>
            <p className='card-text'>Frontend</p>
            <p className='card-text'>Ushbu bo'limda Html, Css, Java Script, Bootstrap, React.js, React-Bootstrap </p>
            <div>
  <Button
    color="primary"
    onClick={()=>showToast1()}
  >
    Ko'roq ma'lumot
  </Button>
  <br />
  <br />
  <Toast isOpen={toast1}>
    <ToastHeader toggle={()=>showToast1()}>
      Frontend haqida
    </ToastHeader>
    <ToastBody>
      Frontend bu Web sitelarning tashqi qismi bo'lib uning dizayni hisoblanadi
    </ToastBody>
  </Toast>
</div>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt={""} />
        <div className='card-body'>
            <p className='card-text'>Data Base</p>
            <p className='card-text'>Ushbu bo'limda PostgeSql Data Base dasturini o'rganamiz, Data Baseda ishlatilinadi</p>
            <div>
            <div>
  <Button
    color="primary"
    onClick={()=>showToast2()}
  >
    Ko'roq ma'lumot
  </Button>
  <br />
  <br />
  <Toast isOpen={toast2}>
    <ToastHeader toggle={()=>showToast2()}>
      Data Base haqida 
    </ToastHeader>
    <ToastBody>
      Data Base Bu Ma'lumotlar bazasi hisoblanadi. Ma'lumotlar bazasi foydalanuvchilarni yoki biror bir ma'lumotlarni saqlab qolishda va ularni ko'rishda foydalaniladi
    </ToastBody>
  </Toast>
</div>
</div>
        </div>
    </div>
   
</div>
    </div>
  )
}
