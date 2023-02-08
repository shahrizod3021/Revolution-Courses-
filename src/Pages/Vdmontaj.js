import React from 'react'
import vd1 from './images/vd1.jpg'
import vd2 from './images/vd2.jpg'
import vd3 from './images/vd3.jpg'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'
import { useState } from 'react'
export default function Vdmontaj() {

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
      <img src={vd1} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={vd2} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={vd3} class="d-block w-100" style={{height:"100vh"}} alt="..." />
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
      <div class="accordion-body">Video Montaj bu kino sohasiga tegishli kurs bo'lib ushbu kursda siz videodagi hatoliklarni to'g'irlashni har xil kreativ videolarni yasashni o'rganasiz<br/><strong>USHBU KURS OXIRIDA SIZ SERTIFIKAT BILAN TAQDIRLANASIZ</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kursning oylig narxi 500ming so'm bo'lib, oylik to'lovlar har oyning 10-sanasigacha to'lanishi majburiy hsioblanadi<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurninng davomiylig 4oy bo'lib siz ushbu muddat ichida Arxitektura dizaynini mukammal tarzda o'rganasiz</div>
    </div>
  </div>
</div>
</div>

<h1 className='text-center mt-5'>Nimalarni o'rganamiz</h1>
<div className='container col-12 d-flex align-items-center justify-content-center mt-5'>
    
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>CapCut</p>
            <p className='card-text'>CapCut bu telefonda videolarni montaj qilish, ularaga chiroy breish uchun foydalaniladi (Mobile Application)</p>
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
      CapCut
    </ToastHeader>
    <ToastBody>
    Ma'lumotlar yo'q
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>iMovei</p>
            <p className='card-text'>iMovei dasturi sizga videolarni montaj qilishda eng qulay va osson bo'lgan begginerlar uchun dastur (Mobile application)</p>
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
      iMovie
    </ToastHeader>
    <ToastBody>
    iMovie haqida ma'lumotlar kam lekin biz sizga iMovie boshlang'ich o'quvchilar uchun ekanligini ayta olamiz
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>InShot</p>
            <p className='card-text'>InShot bu sizning videolaringizni chiroyli ko'rinishga olib kelishda yordam beradigan dastur(Mobile application)</p>
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
      InShot
    </ToastHeader>
    <ToastBody>
    InShot bu Android telefonlari uchun eng qulay va osson bo'lgan dastur
    </ToastBody>
  </Toast>
        </div>
    </div>
</div>
    </div>
  )
}
