import React, { ReactNode } from "react";

interface ButtonProps {
  w:string,
  h:string,
  bg:string,
  bgHover?:string,
  text?:string
  icon?:ReactNode,
  m?:string,
  onClick?:(e?)=>void
}
const Button:React.FC<ButtonProps>=({w,h,bg,bgHover,text,icon,m,onClick})=> {
  return (
    <button onClick={onClick} className={`flex items-center  justify-center font-kumbh font-semibold text-white rounded-sm ${w} ${h} ${bg} ${bgHover} ${m}`}>
    {icon?icon:text}
  </button>
  );
}

export default Button;
