import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer";
import AdminNavbar from "./AdminNavbar";
import NotFound from "../../Components/NotFound";

function AdminLayout() {
    return (
        <div>
            {localStorage.length !==0 && localStorage.getItem("Password") === "0009792"? (
                <>
                    <AdminNavbar/>
                    <div>
                        <Outlet/>
                    </div>
                    <Footer/>
                    {localStorage.removeItem("Telefon raqam")}
                </>

            ) : (
                <>
                    <NotFound/>
                </>
            )}

        </div>
    );
}

export default AdminLayout;