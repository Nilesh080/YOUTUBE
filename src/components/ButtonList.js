import React from 'react'
import Buttons from './Buttons'


const list = ["All", "Awards", "Game shows", "Neews", "Cricket", "Music", "Thriller", "Drama", "Live", "Podcasts", "Bollywood"]

const ButtonList = () => {
  return (
    <div className='flex'>
    {
      list.map((title, index) => <Buttons key={index} title={title} />)
    }
    </div>
  )
}

export default ButtonList