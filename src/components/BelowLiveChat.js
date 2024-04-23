import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCardInWatchPage from "./VideoCardInWatchPage";
import { Link } from "react-router-dom";

const list = [
  "All",
  "Neews",
  "Drama",
  "Live",
  "Cricket",
  "Music",
  "Thriller",
  "Drama",
  "Live",
  "Podcasts",
  "Bollywood",
];

const BelowLiveChat = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("printing all data: ", json?.items);
    setVideos(json?.items);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-[450px]">
      <div className="flex overflow-x-hidden mt-10 ml-[10px] ">
        {list.map((title, index) => (
          <Buttons key={index} title={title} />
        ))}
      </div>

      <div className="flex flex-wrap">
        {videos?.map((video) => (
          <Link to={"?v="+video.id} key={video.id}>
            <div onClick={()=> scrollToTop()}> 
            <VideoCardInWatchPage  info={video} />
            </div>
            
          </Link>
        ))}
      </div>
      
    </div>
  );
};

export default BelowLiveChat;
