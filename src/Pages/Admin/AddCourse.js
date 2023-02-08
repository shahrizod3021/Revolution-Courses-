import React, {useState} from 'react';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function AddCourse() {
    const [name, setName] = useState('');
    const [des, setDesc] = useState('');
    const [batafsil, setBatafsil] = useState('');
    const [linki, setLinki] = useState('');
    const [narxi, setNarxi] = useState('');
    const [davomiyligi, setDavomiyligi] = useState('');
    const navigate = useNavigate();
    const storage = localStorage;

    function validation(e) {
        e.preventDefault()
        if (name.trim().length === 0 || des.trim().length === 0 || batafsil.trim().length === 0 || linki.trim().length === 0 || narxi.trim().length === 0 || davomiyligi.trim().length === 0) {
            return toast.warning("Ma'lumot bo'sh qaytadan kiriting")
        }
        if (!linki.startsWith("/")) {
            return toast.warning("linkning boshi / blina boshlanishi lozim")
        }
        const course = [
            {"name":name},
            {"narxi":narxi}
        ]
        storage.setItem("course", course)
        console.log(storage)
        toast.success("Qo'shildi")
        setTimeout(() => {
            navigate('/addcourse')
        }, 3000)
    }

    return (
        <div className={"container col-8 align-items-center justify-content-center"}>
            <h1 className={"text-start mb-5 mt-4"}>Course Page</h1>
            <form className={"form col-8"} onSubmit={validation}>
                <input type={"text"} placeholder={"Curs nomini kiriting "} className={'form-control mb-3'} value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <input type={"message"} placeholder={"Cursning ma'lumotlarini kiriting"} className={'form-control mb-3'}
                       value={des} onChange={(e) => setDesc(e.target.value)}/>
                <input type={"text"} placeholder={"Curs haqida batafsil ma'lumot kiriting"}
                       className={'form-control mb-3'}
                       value={batafsil} onChange={(e) => setBatafsil(e.target.value)}/>
                <input type={"text"} placeholder={"Cursning linkini kiriting"} className={'form-control mb-3'}
                       value={linki}
                       onChange={(e) => setLinki(e.target.value)}/>
                <input type={"text"} placeholder={"Curs narxini kiriting"} className={'form-control mb-3'} value={narxi}
                       onChange={(e) => setNarxi(e.target.value)}/>
                <input type={"text"} placeholder={"Curs davomiyligini kiriting"} className={'form-control mb-3'}
                       value={davomiyligi} onChange={(e) => setDavomiyligi(e.target.value)}/>
                <button className={"btn btn-success"} type={"submit"}>Qo'shish</button>
            </form>
        </div>
    );
}

export default AddCourse;