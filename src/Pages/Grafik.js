import React from 'react'

export default function Grafik() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={'https://static13.tgcnt.ru/posts/_0/97/975730664c3c0827aefc2f987138a489.jpg'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={'https://mir-cdn.behance.net/v1/rendition/project_modules/fs/cec309129663903.616fdb51cb6cd.jpg'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
    </div>
    <div class="carousel-item">
      <img src={'https://osomnimedia.com/wp-content/uploads/2020/03/man-using-photoshop-software-3561340-1920x1280.jpg'} class="d-block w-100" style={{height:"75vh"}} alt="..." />
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
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Corel Draw</p>
            <p className='card-text'>Corel Draw bu grafik dizaynni ilk o'rganayotgan insonlar uchun juda qulay va osson bo'lgan dastur. O'rganishga judda osson</p>
        </div>
    </div>
    <div className='card col-4 m-3' style={{width:"18rem"}}>
        <img className='card-img-top' src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"} alt="not found" />
        <div className='card-body'>
            <p className='card-text'>Adobe PhotoShop</p>
            <p className='card-text'>Adobe PhotoShop bu PhotoShop seriyasidagi eng zo'r versiya hisoblanib sizga reklamalar tayyorlashda sizga qulaylik breadi</p>
        </div>
    </div>
</div>
    </div>
  )
}
