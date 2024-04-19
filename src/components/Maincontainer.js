import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'
import { useSelector } from 'react-redux';

const Maincontainer = () => {
  const isMenuOpen = useSelector((store) => store.menuSlice.isMenuOpen);
  return (
    isMenuOpen ? (<div>
      <ButtonList />
      <VideoContainer />
  </div>) : (<div className="ml-[9rem]">
        <ButtonList />
        <VideoContainer />
    </div>)
    
  )
}

export default Maincontainer