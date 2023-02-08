import React from 'react'
import s1 from './images/savod1.jpg'
import s2 from './images/savod2.webp'
import s3 from './images/savod3.jpg'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'
import { useState } from 'react'
export default function Komsavodxonligi() {
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
      <img src={s1} class="d-block w-100" style={{height:"100vh"}} alt="savodxonlig" />
    </div>
    <div class="carousel-item">
      <img src={s2} class="d-block w-100" style={{height:"100vh"}} alt="savodxonlig" />
    </div>
    <div class="carousel-item">
      <img src={s3} class="d-block w-100" style={{height:"100vh"}} alt="savodxonlig" />
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
      <div class="accordion-body">Kompyuter savodxonligi kursida siz kompyuteni ilk bosqichlarda boshlab o'rganasiz va ushbu kurs ham aynan kompyuterda ilk marotaba ishlayotgan insonlar uchun mo'ljallangan</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurninng narxi 300ming so'mni tashkil etadi<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurs 2oy davom etadi va siz ushbu muddatdan so'ng kompyuterda bemalol ishlay olasiz</div>
    </div>
  </div>
</div>
</div>

<h1 className='text-center mt-5'>Nimalarni o'rganamiz</h1>
<div className='container col-12 d-flex align-items-center justify-content-center mt-5'>
    
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Word</p>
            <p className='card-text'>Word bu hozirgi kunda har xil sertifikat va resumelar jadvallar, testlar tuzish uchun eng maqul bo'lgan dastur</p>
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
      Word haqida
    </ToastHeader>
    <ToastBody>
    Word bu hozirgi kunda eng yaxshi sertifikat va flayerlar, testlar, hisob kitoblar va jadvallar uchun eng qulay dastur
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Exel</p>
            <p className='card-text'>Exel bu hozirgi kundagi Hisob kitob amallari uchun mo'ljallangan eng yaxshi dastur hisoblanadi. Bugalteriya ishida ishlatilinadi</p>
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
      Exel haqida
    </ToastHeader>
    <ToastBody>
    Exel hisob kitobli ishlarda judayam ko'p qo'llaniladigan va bugalterlar uchun qulay bo'lgan dastur
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Power Point</p>
            <p className='card-text'>Power Point bu har xil presentatisyalar tayyorlash slayd showlarni tayyorlashda ishlatilinadigan  office dasturi</p>
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
      Power Point 
    </ToastHeader>
    <ToastBody>
        Power Point Sizga salyd showlar va presentatsiyalar yaratishingizga yordam beradigan eng qulay dastur
    </ToastBody>
  </Toast>
        </div>
    </div>
</div>
    </div>
  )
}
