"use client"
import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label, 
    type = 'text',
    className= "",
    ...props}:{
        label?: string,
        type?: string,
        className?: string,
    placeholder?: string,
    value?: string,
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    accept?:string},
        
    ref: React.ForwardedRef<HTMLInputElement>){
        const id = useId()
        return (
            <div className='w-full'>
                {label && (
                    <label htmlFor={id}
                    className='inline-block mb-1 pl-1'>
                        {label}
                    </label>
                )}
                <input
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                type={type}
                ref={ref}
                {...props}
                id={id}
                />
            </div>
        )
    })


export default Input