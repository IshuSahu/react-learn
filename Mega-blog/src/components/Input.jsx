import React, { useId } from 'react'

/*
 forwardRef is a higher-order function that allows you to pass a ref through a component to one of its child components. 
 This is particularly useful when you want to access the DOM element or a child component's instance directly from a parent component
*/
const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label // if label pass then only
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                ref={ref} // this will give u refrenec to the parent component that y we use forward ref
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input