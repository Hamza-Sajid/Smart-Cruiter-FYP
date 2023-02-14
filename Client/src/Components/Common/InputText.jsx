import React from "react";

function InputText({ type, palceholder, value, label, onChange }) {
  return (
    <>
      <label className="label line1">{label}</label>
      <input
        type={type}
        placeholder={palceholder}
        className="h-10 input input-bordered w-full"
        onChange={onChange}
        value={value}
      />
    </>
  );
}

export default InputText;
