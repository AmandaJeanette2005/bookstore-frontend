import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/navbar'

const CustLayout = () => {
  return (
    <>
     <div className="">
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <main>
                        <Outlet/>
                    </main>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustLayout