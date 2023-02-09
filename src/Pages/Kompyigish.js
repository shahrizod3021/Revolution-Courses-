import React from 'react'
import d1 from './images/d1.jpg'
import d2 from './images/d2.webp'
import d3 from './images/d3.jpg'
export default function Kompyigish() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={d1} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={d2} class="d-block w-100" style={{height:"100vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={d3} class="d-block w-100" style={{height:"100vh"}} alt="..." />
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

      <h1 className='nima text-center mt-5 mb-5'>Nimalarni o'rganamiz</h1>
      <div className={"media-cart"}>
        <div className='container ar-cart col-12 d-flex mt-5 justify-content-center'>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Ichki qism</p>
              <p className='card-text'>Bu bo'limda biz kompyuterning ichi componentlarini o'rganamiz. Davomiyligi 1oy</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Tashqi qismi</p>
              <p className='card-text'>Bu bo'limda biz kompyuter tashqi qismlarini o'rganamiz, Davomiyligi 1oy</p>

            </div>
          </div>
          <div className='card col-4 m-3' style={{width:"18rem"}}>
            <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
            <div className='card-body'>
              <p className='card-text'>Operatsion sistema</p>
              <p className='card-text'>Bu bo'limda biz windows operatsion sistemasini o'rganamiz. Davomiyligi 1 hafta</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
