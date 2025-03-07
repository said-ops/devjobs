import React from "react";

interface ButtonProps {
  w:string,
  h:string,
  bg:string,
  bgHover:string,
  text:string
}
const Button:React.FC<ButtonProps>=({w,h,bg,bgHover,text})=> {
  return (
    <button className={`flex items-center justify-center font-kumbh font-semibold text-white rounded-sm ${w} ${h} ${bg} ${bgHover}`}>
    {text}
  </button>
  );
}

export default Button;
