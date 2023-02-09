import React from 'react'
import i from './images/ar4.webp'
import ar from './images/ar5.webp'
import ar2 from './images/ar3.webp'
import {useState} from 'react'
import './style.css'

export default function Arxitektura() {

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={i} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ar} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={ar2} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='container align-items-center justify-content-center mt-5'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed bg-warning" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                Kurs haqida
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Arxitektura dizayni bu horzirgi kunda eng rivojlanib
                                kelayotgan kasblardan biri bo'lib bu Hali qurilmagan uylarning dizaynini oldindan 3d
                                modelini yaratish hisoblanadi. Agar siz bizning Revalution academymizda Arxitektura
                                kursini tamomlasangiz biz sizni sertfikat va ish bilan taminlaymiz
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed bg-warning" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                Kurs narxi
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Ushbu kursning oylig narxi 500ming so'm bo'lib, oylik to'lovlar
                                har oyning 10-sanasigacha to'lanishi majburiy hsioblanadi<br/><strong>BIRINCHI DARS
                                    BEPUL!!!</strong></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed bg-warning" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                Kurs davomiyligi
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                             aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Ushbu kurninng davomiylig 6oy bo'lib siz ushbu muddat ichida
                                Arxitektura dizaynini mukammal tarzda o'rganasiz
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className='nima text-center mt-5 mb-5'>Nimalarni o'rganamiz</h1>
            <div className={"media-cart"}>
                <div className='container ar-cart col-12 d-flex mt-5 justify-content-center'>
                    <div className='card col-4 m-3' style={{width: "18rem"}}>
                        <img className='card-img-top'
                             src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"}
                             alt="not found"/>
                        <div className='card-body'>
                            <p className='card-text'>3D Max</p>
                            <p className='card-text'>3D Max horizrgi kunda arxitektura dizayni bo'yicha yetakchi
                                o'rinlarda turadigan dastur</p>

                        </div>
                    </div>
                    <div className='card col-4 m-3' style={{width: "18rem"}}>
                        <img className='card-img-top'
                             src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"}
                             alt="not found"/>
                        <div className='card-body'>
                            <p className='card-text'>AutoCad</p>
                            <p className='card-text'>AutoCad bu uylarning va har xil chizmalarning 2d va 3d modellarini
                                yaratishda ishlatilinadi</p>

                        </div>
                    </div>
                    <div className='card col-4 m-3' style={{width: "18rem"}}>
                        <img className='card-img-top'
                             src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"}
                             alt="not found"/>
                        <div className='card-body'>
                            <p className='card-text'>Lumion</p>
                            <p className='card-text'>Lumion dasturi bu yuqori siffatdagi render va shading qilish uchun
                                yaratilingan dastur</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
