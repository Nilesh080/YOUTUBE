import React from 'react'
import { messages } from '../utils/helper'

const ChatMessage = ({name, message}) => {
  return (
    <div className={`flex mx-1 ${messages.includes(message) ? 'bg-white' : 'bg-gray-300'} cursor-pointer p-3 hover:bg-gray-200`}>
        <img
          className="h-8 col-span-1"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
        <span className='font-bold px-2 mt-1'>{name}</span>
        <span className='mt-1'>{message}</span>
    </div>
  )
}

export default ChatMessage

