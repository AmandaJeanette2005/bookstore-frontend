import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../component/sidebar'


const AdminLayout = () => {
  return (
    <>
   <div className=""> 
            <div className="container-fluid">
                <div className="row">
                    <SideBar/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    </>
    )
}

export default AdminLayout