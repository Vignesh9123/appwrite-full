import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}:{
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    bgColor?: string,
    textColor?: string,
    className?: string,
    props?: any,
  onClick?: () => void}) {
  return (
    <button
    className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}
    > {children} </button>
  )
}

export default Button