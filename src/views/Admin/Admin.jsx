import React,{ useState, useLayoutEffect } from "react"
import Title from "../../components/title/title"
import SearchBar from "../../components/layout/search-bar/search-bar"
import AdminList from "./AdminList/AdminList"
import AddButtom from "../../components/add-button/add-button"
import ModalForm  from "./ModalForm/ModalForm"
import "./Admin.css"

const Admin = () => {
    const [modal, setModal ] = useState(false)
    const [form, setForm ] = useState(null)
    const [currentAdmin, setCurrentAdmin ] = useState(null)
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useLayoutEffect(() => {
      const updateSize = () => setWidthWindow(window.innerWidth);
      window.addEventListener('resize', updateSize);
      updateSize()
      return () => window.removeEventListener('resize', updateSize);
    },[]);  

    const toggleForm = (form = null, currentAdmin=null)=> {
        setCurrentAdmin(currentAdmin)
        setForm(form)
        setModal(!modal)
    }

    const AdminInfo = (
        <div className="px-5">
            <Title className="admin-title">Admin</Title>
            <div className="admin-add-button">
                <AddButtom className="text-dark" circle="circle-text" onClick={() => toggleForm("create")} />
            </div>
            <SearchBar />
            <AdminList toggle={toggleForm} />
        </div> 
    )

    const templete =  widthWindow >= 576 ?
        <div>
            { modal ? <ModalForm admin={currentAdmin} content={form} show={modal} toggle={toggleForm}/> : null }
            { AdminInfo }
        </div>
        : modal ?
        <ModalForm admin={currentAdmin} content={form} show={modal}  toggle={toggleForm}/>
        : <div>{AdminInfo}</div>

    return (<div>{templete}</div>)
}

export default Admin