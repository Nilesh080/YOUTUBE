import React from 'react'

const Buttons = ({title}) => {
  return (
    <div>
        <button className={`p-1 px-3 m-2 ${title !== "All" ? ' bg-gray-200 text-black' : 'bg-black text-white'} rounded-lg`}>{title}</button>
    </div>
  )
}

export default Buttons