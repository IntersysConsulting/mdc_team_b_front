import React,{ useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeRequest } from "../../../api/generalApi"
import { read_admins, error_admin }  from "../../../actions/adminActions"
import AdminCart from "./AdminCart/AdminCart"
import "./AdminList.css"

const AdminList = props => {
    const dispatch = useDispatch()
    const admin = useSelector(store => store.authenticationState)
    const adminStore = useSelector(store => store.adminState.admins)
    const [ admins, setAdmins ] = useState([])

    useEffect(() => {
        let options = {
            method: "get", 
            actionSuccessful: read_admins,
            actionError: error_admin,
            url: "admin/management/?page_size=9000"
        }
        dispatch(makeRequest(options))
    },[dispatch])

    useEffect(() => {
        setAdmins(adminStore)
    },[adminStore])

    let currentAdmin =  admins.find(a => {
        let fullName = a.first_name + " " + a.last_name
       return fullName === admin.name
    })

    let restAdmin = admins.filter(a => a.email !== currentAdmin.email)
    let extra = restAdmin.length % 2
    let column1 = restAdmin.slice(0, Math.floor(restAdmin.length/2))
    let column2 = restAdmin.slice(Math.floor(restAdmin.length/2), restAdmin.length - extra)
    let extcol = extra > 0 ? restAdmin.slice(-1) : null

    return (
        <>
        <div className="row">
            <div className="col-md-12" id="adminListCurrent">
                { currentAdmin ?
                <AdminCart
                    admin={currentAdmin}
                    toggle={props.toggle}
                    current
                /> : null }
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-lg-12">
                <div className="row">
                    <div className="col-xs-12  col-md-6 col-lg-6">
                        {  column1 ? column1.map(a => <AdminCart admin={a} />) : null }
                        {  extcol ? extcol.map(a => <AdminCart admin={a} />) : null }
                    </div>
                    <div className="col-xs-12  col-md-6 col-lg-6">
                    {  column2 ? column2.map(a => <AdminCart admin={a} />) : null }
                </div>
                </div>
            </div>
        </div>
      
        </>
    )
}

export default AdminList