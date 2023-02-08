import React from 'react';
import NotFound from "../../Components/NotFound";

function Admin() {
    const storage = localStorage
    return (
        <div className={"container"}>
            {storage.length !== 0?(
                <>
                    {storage.removeItem("Password")}
                    {storage.removeItem("Telefon raqam")}
                    <h1>Salom Admin</h1>
                </>

            ):
                <>
                    <NotFound />
                </>
            }
        </div>

    );
}

export default Admin;