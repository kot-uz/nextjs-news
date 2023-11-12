"use client";

import React from "react";

interface CustomButtonProps{
  title: string,
  containerStyles?: string,
  btnType?: "button" | "submit",
  handleClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomButton = ({title, containerStyles, handleClick, btnType}:CustomButtonProps) => {
  return (
    <button 
      className={`custom-btn ${containerStyles}`}
      type={btnType || "button"}
      disabled={false}
      onClick={handleClick}
    >
      <span className="flex-1">
        {title}
      </span>
    </button>
  )
};

export default CustomButton;