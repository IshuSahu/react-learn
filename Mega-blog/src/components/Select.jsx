import React, { useId } from 'react'

function Select({
    options,
    label, //input fill type
    className,
    ...props
}, ref) {
    const id = useId()
    return (
        <div className=' w-full'>
            {label &&
                <label htmlFor={id} className=''>
                    <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                    >
                        {/* if option dont have value then it will definedtly crashes so use ? */}
                        {options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </label>}
        </div>
    )
}
//Another way to use ForwordRef
export default React.forwardRef(Select)   