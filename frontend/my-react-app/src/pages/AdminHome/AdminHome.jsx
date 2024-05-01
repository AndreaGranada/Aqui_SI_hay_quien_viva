import "./AdminHome.css"
import MenuAdmin from "../../components/MenuAdmin/MenuAdmin"
const AdminHome = () => {

    return (
        <>
            <div className="container-fluid row">
                <MenuAdmin/>
                <main className="name col">
                    <h1>Hola mundo</h1>
                </main>
            </div>

        </>
    )
}

export default AdminHome