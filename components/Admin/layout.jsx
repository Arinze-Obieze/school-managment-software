import React from 'react'
import AdminNavbar from './AdminNavbar'

function Layout({children}) {
  return (
    <>
    <AdminNavbar/>
    <div >
        {children}
    </div>
    </>
  )
}

export default Layout