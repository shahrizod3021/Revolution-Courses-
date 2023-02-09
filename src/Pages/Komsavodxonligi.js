import React from 'react'
import s1 from './images/savod1.jpg'
import s2 from './images/savod2.webp'
import s3 from './images/savod3.jpg'
export default function Komsavodxonligi() {

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

      <h1 className='nima text-center mt-5 mb-5'>Nimalarni o'rganamiz</h1>
      <div className={"media-cart"}>
        <div className='container ar-cart col-12 d-flex mt-5 justify-content-center'>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>3D Max</p>
              <p className='card-text'>3D Max horizrgi kunda arxitektura dizayni bo'yicha yetakchi o'rinlarda turadigan dastur</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>AutoCad</p>
              <p className='card-text'>AutoCad bu uylarning va har xil chizmalarning 2d va 3d modellarini yaratishda ishlatilinadi</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Lumion</p>
              <p className='card-text'>Lumion dasturi bu yuqori siffatdagi render va shading qilish uchun yaratilingan dastur</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
