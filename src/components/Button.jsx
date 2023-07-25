import React from 'react'

function Button({ children, className, ...rest}) {
    return (
        <button className={`bg-sky-500 text-white font-semibold p-2 px-4 rounded-md ${className}`} {...rest}>{children}</button>
    )
}

export default Button