import React from 'react';
import NotFound from "../../Components/NotFound";

function Admin() {
    const storage = localStorage
    return (
        <div className={"container"}>
            {storage.length !== 0 && storage.getItem("Password") === "0009792"?(
                <>
                    <h1>Salom Admin</h1>
                    {storage.removeItem("Telefon raqam")}
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