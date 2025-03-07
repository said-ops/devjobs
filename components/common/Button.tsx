import React, { ReactNode } from "react";

interface ButtonProps {
  w:string,
  h:string,
  bg:string,
  bgHover?:string,
  text?:string
  icon?:ReactNode,
  m?:string
}
const Button:React.FC<ButtonProps>=({w,h,bg,bgHover,text,icon,m})=> {
  return (
    <button className={`flex items-center ${m} justify-center font-kumbh font-semibold text-white rounded-sm ${w} ${h} ${bg} ${bgHover}`}>
    {icon?icon:text}
  </button>
  );
}

export default Button;
