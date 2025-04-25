import React from "react";
import UserPanelInput from "../../../common/user-panel-input/UserPanelInput";

const InputBox = ({
  boxStyle,
  inputStyle,
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  asType
}) => {
  return (
    <div className={`${boxStyle} input-box-container`}>
      <p className="text-[#c7c7c7] indent-4 text-[13px]">{labelText}</p>
      <UserPanelInput
        placeholder={inputPlaceholder}
        name={inputName}
        type={inputType}
        style={inputStyle}
        asType={asType}
      />
    </div>
  );
};

export default InputBox;
