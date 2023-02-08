import React, { useState } from 'react'
import g1 from './images/grapik1.jpg.jpg'
import g2 from './images/grapik2.jpg.jpg'
import g3 from './images/grapik3.jpg.jpg'

import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap'
export default function Grafik() {
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
      <img src={g1} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={g2} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={g3} class="d-block w-100" style={{height:"100vh"}} alt="..." />
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
      <div class="accordion-body">Grafik Dizayn kursi bu Photoshop, Corel Draw, Illustrator shunga o'xshash dasturlarda ishlash, har xil turda reklamalar va flayerlarni tayyorlash uchun o'rganiladi. Ushbu kursda biz sizni sertifikat breiladi, va ish bilan taminlashda sizga yordam beriladi</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurs narxi 500ming so'm bo'lib oylik to'lov har oyning 10-sanasigacha to'lanilishi majburiy<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Ushbu kurs 4 oy davomida bo'lib o'tadi va ushbu kursni siz 4oyda professional darajada tugatasiz</div>
    </div>
  </div>
</div>
</div>

<h1 className='text-center mt-5'>Nimalarni o'rganamiz</h1>
<div className='container col-12 d-flex align-items-center justify-content-center mt-5'>
    
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>PhotoShop</p>
            <p className='card-text'>Photoshop bu sizga har hil flayer yoki reklamalarni tayyorlashda ishlatilinadigan juda katta sfatga ega dastur</p>
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
      PhotoShop
    </ToastHeader>
    <ToastBody>
      Photoshop bu hozirgi kundagi flyer va reklamalar yaratishda osson va qulay bo'lgan dastur
    </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Corel Draw</p>
            <p className='card-text'>Corel Draw bu grafik dizaynni ilk o'rganayotgan insonlar uchun juda qulay va osson bo'lgan dastur. O'rganishga judda osson</p>
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
      Corel Draw 
    </ToastHeader>
    <ToastBody>
    CorelDRAW - bu vektorli grafik dastur, ya'ni unda yaratilgan ob'ektlarni matematik formulalar bilan tavsiflash mumkin.
     </ToastBody>
  </Toast>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Adobe Illustrator</p>
            <p className='card-text'>Agar siz vektor chizish vositasini qidirsangiz, Adobe bir muncha vaqtdan beri Draw deb atagan vositasi shunchaki ajoyibdir.</p>
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
      Adobe Illustrator
    </ToastHeader>
    <ToastBody>
    Adobe Illustrator Draw bu eng zo'r deb aniqlangan dastur vektorli grafikalarni yaratish, loyihalash va tahrirlash. Buni tezda tushunish uchun siz u bilan dizayn yaratasiz va sifatni yo'qotmasdan uni xohlagancha kengaytira olasiz, chunki u sizning barmoqlaringizdan paydo bo'ladigan har bir ijodiy qism uchun nuqta va oxir sifatida vektorlardan foydalanadi
    </ToastBody>
  </Toast>
        </div>
    </div>
</div>
    </div>
  )
}
