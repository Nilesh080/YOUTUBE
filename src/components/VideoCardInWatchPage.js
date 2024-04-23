import React from "react";
import { MdVerified } from "react-icons/md";
import { calculateDays } from "../utils/helper";

const VideoCardInWatchPage = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  let { viewCount } = statistics;
  let dayMessage = calculateDays(publishedAt);
  
  if(viewCount.length >= 7){
    const n = viewCount.length;
    let x = n-6;
    viewCount = viewCount.slice(0,x)+"M";
  }
  else{
    const n = viewCount.length;
    let x = n-6;
    viewCount = viewCount?.slice(0,x-2)+"K";
  }
  const channelTitleWords = title.split(" ");
  const truncatedChannelTitle = channelTitleWords?.slice(0, 6).join(" ");
  return (
    <div className="flex ml-[16px] w-[432.22px]">
      <div className="w-5/12 mt-2">
        <img
          className="rounded-lg w-[168px] h-[94px]"
          src={thumbnails.medium.url}
          alt=""
        />
      </div>
      <div className="w-7/12">
        <p className="pt-1 font-semibold">{truncatedChannelTitle}...</p>
        <div className="flex items-center">
          <p className="font-sans text-sm text-gray-600">{channelTitle}</p>
          <MdVerified className="w-4 h-4 mx-2 text-gray-600"/>
        </div>
        <p className="font-sans text-sm text-gray-600">{viewCount} views . {dayMessage}</p>
      </div>
    </div>
  );
};

export default VideoCardInWatchPage;
