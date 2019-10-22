import React,{ useState, useLayoutEffect } from "react"
import { withRouter } from "react-router-dom"
import Title from "../../components/title/title"
// import SearchBar from "../../components/layout/search-bar/search-bar"
import AdminList from "./AdminList/AdminList"
import AddButtom from "../../components/add-button/add-button"
import "./Admin.css"
import SignupAdmin  from "./SignupAdmin/SignupAdmin"

const Admin = () => {
    let [modalAdd, setModalAdd ] = useState(false)
    const [widthWindow, setWidthWindow] = useState(window.innerWidth);

    useLayoutEffect(() => {
      function updateSize() {
        setWidthWindow(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize()
      return () => window.removeEventListener('resize', updateSize);
    },[]);  

    const toggleAdmin= ()=> {
        setModalAdd(!modalAdd)
    }

    return (
        <>
            {modalAdd && widthWindow < 576 ?
            <div className="px-5">
                <SignupAdmin
                    cancel={toggleAdmin}
                    width={widthWindow}
                    show={modalAdd}
                /> 
            </div>
            : 
            <>
                {modalAdd ?
                <SignupAdmin
                    cancel={toggleAdmin}
                    show={modalAdd}
                    width={widthWindow}
                />
                : null}
                <div className="px-5">
                    <Title className="admin-title">Admin</Title>
                    <div className="admin-add-button">
                        <AddButtom className="text-dark" circle="circle-text" onClick={toggleAdmin} />
                    </div>
                    {/* <SearchBar /> */}
                    <AdminList />
                </div> 
            </>
         }
        </>
    )
}

export default withRouter(Admin)