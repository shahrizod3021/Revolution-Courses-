import React, {useState} from 'react'
import w1 from './images/w1.webp'
import w2 from './images/w2.webp'
import w3 from './images/w3.jpg'
import './style.css'
import {Button, PopoverHeader, PopoverBody, Popover} from 'reactstrap'


export default function WebDasturlash() {



    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={w1} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={w2} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={w3} className="d-block w-100" style={{height: "100vh"}} alt="..."/>
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
                            <div className="accordion-body">Web dasturlash kursi bu Google ijtimoiy tarmog'lariga
                                dasturlar har xil ilovalarni yaratishni o'rgatiladigan kurs bo'lib, ushbu kursda har bir
                                inson o'z fikrlash doirasini oshirishi va kuchli logikaga ega bo'lishadi. Ushbu kursda
                                biz sizni sertifikat bilan ta'minlaymiz va Ishga joylashishingizga yordam beramiz
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed bg-warning" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                Kurs narxi
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Ushbu kursning narxi 500ming so'm bo'lib, to'lov har oyning
                                10 sanasigacha to'laniladi<br/><strong>BIRINCHI DARS BEPUL!!!</strong></div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed bg-warning" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                    aria-expanded="false" aria-controls="flush-collapseThree">
                                Kurs davomiyligi
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                             aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">Ushbu kurs davomiyligi 10 oy va ushbu muddat o'tgandan so'ng
                                2 oy davomida amaliyot o'tash jarayoni boshlanadi.
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
                            <p className='card-text'>Backend</p>
                            <p className='card-text'>BU bo'lim 6oyni tashkil etib unda Java dasturlash tili
                                o'rganiladi</p>
                        </div>
                    </div>
                    <div className='card col-4 m-3' style={{width: "18rem"}}>
                        <img className='card-img-top'
                             src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"}
                             alt="not found"/>
                        <div className='card-body'>
                            <p className='card-text'>Frontend</p>
                            <p className='card-text'>Bu bo'limda Html, Css, Bootstrap, Java Script, React js
                                o'rganiladi. Davomiyligi 2oy</p>
                        </div>
                    </div>
                    <div className='card col-4 m-3' style={{width: "18rem"}}>
                        <img className='card-img-top'
                             src={"https://avatars.mds.yandex.net/i?id=279d28fed3291b6cbcd168f3b696317792464cda-8497538-images-thumbs&n=13"}
                             alt="not found"/>
                        <div className='card-body'>
                            <p className='card-text'>Data base</p>
                            <p className='card-text'>Bu bo'limda biz PostgreSql data base dasturni o'rganib chiqamiz,
                                davomiyligi 2oy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
