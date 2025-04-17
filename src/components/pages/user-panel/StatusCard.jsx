import React from 'react'

const StatusCard = ({ children, title, description }) => {
  return (
    <div className='status-card-control'>
        <div className="top flex items-center">
            <h2>
                {4}
                <span className='text-[#000]'>دوره</span>
            </h2>
            {children}
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default StatusCard
