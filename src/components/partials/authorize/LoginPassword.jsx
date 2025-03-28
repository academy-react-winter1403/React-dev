import React from 'react'
import { InputOtp } from "@heroui/react";

const LoginPassword = () => {
  return (
    <div className="flex flex-col">
            <div className="w-[266px] h-[59px] rounded-lg flex items-center gap-4 bg-[#f7f7f7]">
              <InputOtp
                length={5}
                variant="underlined"
                value="24783"
                classNames={{
                  segmentWrapper:"flex"
                }}
              />
            </div>
            <span className="flex flex-row-reverse text-[#008e8b] text-xs font-normal font-b-yekan">1.59</span>
          </div>
  )
}

export default LoginPassword
