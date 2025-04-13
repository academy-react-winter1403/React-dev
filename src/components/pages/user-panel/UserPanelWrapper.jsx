import React from 'react'
import PanelDashboard from './PanelDashboard'
import { Outlet } from 'react-router-dom'
import { TiHome } from "react-icons/ti";

const UserPanelWrapper = () => {
  return (
    <div className='user-panel-holder w-full flex justify-center'>
        <div className="dashboard-container w-[70%] rounded-[10px] bg-[#FFFFFF]
            drop-shadow-[0_1px_2px_#00000040] flex items-start my-11 overflow-x-hidden"
        >
            <div className="rigth-item-control w-[30%]">
                <PanelDashboard/>
            </div>
            <div className="left-item-control w-[70%] h-full p-5">
                <div className="home-icon-control w-full flex justify-end">
                    <TiHome size={25} className='text-[#01B4AF] cursor-pointer'/>
                </div>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default UserPanelWrapper
