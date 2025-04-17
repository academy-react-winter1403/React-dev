import React from 'react'
import StatusCard from '../StatusCard'
import { DashStudentIcon } from '../../../../core/icons/user-panel-icons'

const DashboardPage = () => {
  return (
    <div className='dashboard-container w-full flex justify-center'>
      <div className="dashboard-control w-[90%] h-96 border">
        <div className="top-item-control">
          <StatusCard>
            <DashStudentIcon/>
          </StatusCard>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
