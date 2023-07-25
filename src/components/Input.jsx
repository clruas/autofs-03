import React from 'react'

function Input({ label, error, ...rest}) {

  return (
    <div className='grid row-auto'>
        <label className='text-sm'>{label}</label>
        <input className={`border ${error && 'border-red-500'} p-2 rounded-md`} {...rest} />
        { error && <span className='text-xs text-red-500'>{error}</span>}
    </div>
  )
}

export default Input