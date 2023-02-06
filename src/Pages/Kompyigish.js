import React from 'react'

export default function Kompyigish() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={'https://4.bp.blogspot.com/-fd1KwLuBYOo/Wr95hl5AhPI/AAAAAAAADQ0/bYztROFxXeYND0SK-iXAExRWKWPZEIS2QCEwYBhgL/s1600/Computer%252BComponents.jpg'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={'https://avatars.mds.yandex.net/i?id=1a05e7c50c0d3625edb60bbe8ea55d8f71b10bc4-7546740-images-thumbs&n=13'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={'https://gizphone.ru/wp-content/uploads/2022/06/carrera-dual-soporte-y-mantenimiento-de-equipos-de-computacion-senati1800-x-1190.jpg'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
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
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Kompyuter ichki qismi</p>
            <p className='card-text'>Protsessor, Video karta, Operativ Xotira, Kompyuter Xotirasi shu kabilar</p>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Operatsiyon Sistemlar</p>
            <p className='card-text'>Ushbu bo'limda Siz kompyuterga windows operatsioyn sistemlarni o'rantashni o'rganasiz</p>
        </div>
    </div>
</div>
    </div>
  )
}
