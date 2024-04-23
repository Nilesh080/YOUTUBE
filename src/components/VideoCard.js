import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.menuSlice.isMenuOpen);
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return isMenuOpen ? (
    <div className="p-2 w-96 shadow-lg bg-gray-100">
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt=""
      />
      <ul>
        <li className="pt-1 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  ) : (
    <div className="p-2 w-80 shadow-lg  bg-gray-100">
     
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt=""
      />
      <ul>
        <li className="pt-1 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) =>{
  return (
    <div className="border border-red-600">
      <VideoCard info={info} />
    </div>
  )
}


export default VideoCard;
