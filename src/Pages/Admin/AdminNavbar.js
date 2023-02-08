import React, {useState} from 'react';
import {Button, Offcanvas, OffcanvasHeader, OffcanvasBody} from 'reactstrap'
import {Link, useNavigate} from "react-router-dom";
function AdminNavbar() {
    const storage = localStorage;
    const navigae = useNavigate()

    function cleatStorage() {
        storage.clear()
        navigae('/')
        window.location.reload()
    }
    const [canvas, setCanvas] = useState(true)

    function showOffcanvas(){
        setCanvas(!canvas);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div>
                                <Button
                                    color="primary"
                                    onClick={() => showOffcanvas()}
                                >
                                    Bo'limlar
                                </Button>
                                <Offcanvas isOpen={canvas}
                                    scrollable
                                    toggle={() => showOffcanvas()}
                                >
                                    <OffcanvasHeader toggle={() => showOffcanvas()}>
                                        Bo'limni tanlang
                                    </OffcanvasHeader>
                                    <OffcanvasBody>
                                        <strong>
                                            <div>
                                                <Link to={'/addcourse'} className={"btn btn-success col-12 mb-3"}>Kurs qo'shish</Link>
                                                <Link to={'/'} className={"btn btn-success col-12 mb-3"}>Kursni olib tashlash</Link>
                                                <Link to={'/'} className={"btn btn-success col-12 mb-3"}>Kurslar</Link>
                                                <Link to={'/'} className={"btn btn-secondary col-12 mb-3"} onClick={()=>cleatStorage()}>Chiqish</Link>
                                            </div>
                                        </strong>
                                    </OffcanvasBody>
                                </Offcanvas>
                            </div>
                        </ul>

                        <h3>Revolution <span className='text-light'>Academy</span></h3>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default AdminNavbar;