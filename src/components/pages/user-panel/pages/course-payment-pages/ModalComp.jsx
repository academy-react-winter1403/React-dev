import React from "react";

const ModalComp = ({ children, openFlag }) => {
  return (
    <>
      {openFlag && (
        <div className="modal-control fixed w-full h-full top-0 left-0 flex justify-center items-center z-[500]">
            <div className="w-[700px] rounded-xl bg-[#222222B2] backdrop-blur-md drop-shadow-[0_2px_4px_0_#00000040] p-3.5 pb-6">
            {children}
            </div>
        </div>
      )}
    </>
  );
};

export default ModalComp;
