import React from 'react'
import { MdNavigateNext } from "react-icons/md";
function Breadcrumb() {
  return (
    <div className='flex place-items-center px-4 py-4'>

<h1 className='text-gray-700'>Home</h1>
<MdNavigateNext />
<h1 className='text-orange-600'>Admin</h1>

    </div>
  )
}

export default Breadcrumb