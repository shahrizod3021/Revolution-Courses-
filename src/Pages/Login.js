import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import admin from './Admin/admin.json'
import {useLocation} from "react-router-dom";
function Login() {
    const location = useLocation()
    console.log(location)
    const [telraqam, setTelraqam] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const storage = localStorage;

    function loginHandler(e){
        e.preventDefault();
        if (telraqam.trim().length === 0 || password.trim().length === 0) {
            return toast.warning("ma'lumot bo'sh qaytadan urunib ko'ring")
        }
        if (telraqam !== admin.telraqam) {
            return toast.error("Telefon raqam hato qaytadan urunib ko'ring")
        }
        if (password !== admin.password) {
            return toast.error("Passowrd hato qaytadan urunib ko'ring")
        }
        toast.success("Biroz kuting")
        storage.setItem("Telefon raqam", telraqam)
        storage.setItem("Password", password)
        storage.setItem("key", location.key)
        setTimeout(() => {
            navigate('/admin');
            window.location.reload();
        }, 3000)

    }

    return (
        <div className={"container d-flex align-items-center justify-content-center"}>
            <form className={"form col-8 mt-5"} onSubmit={loginHandler}>
                <input type={"number"} className={"form-control col-8 mb-3"} placeholder={'Telefon raqamingizni kiriting'}
                       value={telraqam} onChange={(e) => setTelraqam(e.target.value)}/>
                <input type={"password"} className={"form-control col-8 mb-3"} placeholder={'Parolingizni kiriting'} value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <button type={"submit"} className={"btn btn-success"}>Login</button>
            </form>
        </div>
    );
}

export default Login;