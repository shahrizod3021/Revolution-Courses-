import React, { useState } from 'react'
import g1 from './images/grapik1.jpg.jpg'
import g2 from './images/grapik2.jpg.jpg'
import g3 from './images/grapik3.jpg.jpg'
import './style.css'
export default function Grafik() {


  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={g1} className="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={g2} className="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={g3} className="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='container align-items-center justify-content-center mt-5'>
<div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Kurs haqida
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Grafik Dizayn kursi bu Photoshop, Corel Draw, Illustrator shunga o'xshash dasturlarda ishlash, har xil turda reklamalar va flayerlarni tayyorlash uchun o'rganiladi. Ushbu kursda biz sizni sertifikat breiladi, va ish bilan taminlashda sizga yordam beriladi</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Kurs narxi
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Ushbu kurs narxi 500ming so'm bo'lib oylik to'lov har oyning 10-sanasigacha to'lanilishi majburiy<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Kurs davomiyligi
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Ushbu kurs 4 oy davomida bo'lib o'tadi va ushbu kursni siz 4oyda professional darajada tugatasiz</div>
    </div>
  </div>
</div>
</div>

      <h1 className='nima text-center mt-5 mb-5'>Nimalarni o'rganamiz</h1>
      <div className={"media-cart"}>
        <div className='container ar-cart col-12 d-flex mt-5 justify-content-center'>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Photoshop</p>
              <p className='card-text'>Photoshop bu grafik dizayn va kompaniya reklamalri flayerlar yasashda eng qulay dstur</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Corel Draw</p>
              <p className='card-text'>Corel Draw dasturi bizning kursda 1 yarim oy davomida o'tiladi</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Adobe Illustrator</p>
              <p className='card-text'>Illustrator - bu vekotrli chizish va grafik  elemnetlarning dizayniga bag'ishlangan</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
