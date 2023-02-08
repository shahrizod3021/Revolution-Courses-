import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer";
import AdminNavbar from "./AdminNavbar";
import NotFound from "../../Components/NotFound";

function AdminLayout() {
    return (
        <div>
            {localStorage.length !==0? (
                <>
                    <AdminNavbar/>
                    <div>
                        <Outlet/>
                    </div>
                    <Footer/>
                    {localStorage.removeItem("Password")}
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