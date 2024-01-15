import React from 'react'

const Input = ({
    label,
    placeholder,
    name,
    type,
    className,
    Icon

}) => {
    return (
        <div className=' relative  '>
            <label htmlFor="first_name" className=' block  text-sm font-medium   text-textColor'>{label}</label>
            <input placeholder={placeholder} name={name} id={name} type={type} className={`  outline-none bg-lightGray  p-1.5 text-primary placeholder:text-gray-500 rounded-md  ${className}`} />
            <div className=' absolute right-3 top-8'>
                <i>{Icon}</i>
            </div>
        </div>
    )
}

export default Input