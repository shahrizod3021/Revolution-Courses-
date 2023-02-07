import React from 'react'
import d1 from './images/d1.jpg'
import d2 from './images/d2.webp'
import d3 from './images/d3.jpg'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'
import { useState } from 'react'
export default function Kompyigish() {
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
      <img src={d1} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={d2} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={d3} class="d-block w-100" style={{height:"75vh"}} alt="..." />
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
      <div class="accordion-body">Kompyuter yig'ish kursida siz kompyuterning ichki va tashqi qismlarini mukammal tarzda o'rganasiz. Bunday tashqari siz kompyutening ichki qismlarini bir-biriga ulash windows operatsiyon sistemlarini o'rnatish kabi bilimlarni o'rganasiz <br/><strong>USHBU KURSDA SERTIFIKAT BILAN TAMINLANASIZ</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kursning narxi 300ming so'm<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kursning davomiyligi 2oy</div>
    </div>
  </div>
</div>
</div>

<h1 className='text-center mt-5'>Nimalarni o'rganamiz</h1>
<div className='container col-12 d-flex align-items-center justify-content-center mt-5'>
    
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Kompyuter tashqi qimsi</p>
            <p className='card-text'>Kompyuter tashqi qisimlari mishka, klavitura, monitor shu kabi bo'limlarni</p>
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
      Ichki qism haqida
    </ToastHeader>
    <ToastBody>
      Kompyuter ichki qimsi bu kompyuterning operativ hotiralari, protsessori, video kartasi, SSD, HDD va shu kabilar hisoblanadi.
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Kompyuter ichki qismi</p>
            <p className='card-text'>Protsessor, Video karta, Operativ Xotira, Kompyuter Xotirasi shu kabilar</p>
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
      Tashqi qism haqida haqida
    </ToastHeader>
    <ToastBody>
      Kompyuterning tashqi qismi bu sichqoncha, klavitura, monitor, kompyuter qutisi va boshqalar  
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Operatsiyon Sistemlar</p>
            <p className='card-text'>Ushbu bo'limda Siz kompyuterga windows operatsioyn sistemlarni o'rantashni o'rganasiz</p>
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
      Operatsion sistemlar haqida
    </ToastHeader>
    <ToastBody>
     Operatsion Sistema bu kompyuteni qo'llab turadigan bo'lim hisoblanadi. Hozirda Windows, MacOs, Linux Operatsion sistemelari mavjud.
    </ToastBody>
  </Toast>
        </div>
    </div>
</div>
    </div>
  )
}
