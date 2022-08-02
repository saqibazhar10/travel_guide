import React, { } from 'react'

import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
function Navbar() {

    // const auth = getAuth(app);

    return (
        <>
            <div className='flex flex-col items-center md:items-start'>
                <div className='  w-[300px]   h-screen'>
                    <div className='flex '>
                        <label className='font-Poppins font-extrabold text-2xl  mt-14 ml-14  text-[#FAFAFA] '>

                            Admin Panel
                        </label>
                    </div>


                    <ul className=' my-12 text-xl font-Poppins text-[#FAFAFA] '>
                        <div className='flex flex-col ml-12' >
                            <a href='/Dashboard' className='flex space-x-4'>
                                <DashboardIcon className='mt-5' /><li  >
                                    Dashboard</li> </a>
                            <a href='/images' className='flex space-x-4'>
                                <ImageSearchIcon className='mt-5' /><li >
                                    Images </li>
                            </a>
                            <a href='/Videos' className='flex space-x-4'>
                                <SmartDisplayIcon className='mt-5' /> <li >
                                    Videos</li></a>

                            <a href='/setting' className='flex space-x-4'>
                                <SettingsIcon className='mt-5' /> <li >
                                    Settings</li></a>

                        </div>
                        <a href='/'>
                        <button  type="button" class="text-[#FAFAFA] bg-[#8a8c99] mt-7  font-medium rounded-lg text-sm px-5 py-2.5 ml-[50px] " >Logout</button>
                        </a>
                    </ul>
                </div>


            </div>

        </>


    )
}

export default Navbar