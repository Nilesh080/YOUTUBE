import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { GOOGLE_API_KEY } from "../utils/constants";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { PiBellRingingLight } from "react-icons/pi";
import { MdVerified } from "react-icons/md";
import  Description  from "./Description";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [subscribed, setsubscribed] = useState(false);
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${searchParams.get(
        "v"
      )}&key=${GOOGLE_API_KEY}`
    );
    const json = await data.json();
    console.log("printing: ", json?.items[0]?.snippet?.description);
    setData(json?.items[0]?.snippet);
    setStats(json?.items[0]?.statistics);
  };
  const channelTitleWords = data?.channelTitle?.split(" ");
  const truncatedChannelTitle = channelTitleWords?.slice(0, 1).join(" ");

  return (
    <div className="ml-10 w-[1100px]">
      <div className="px-2">
        <iframe
          className="rounded-md"
          width="1100"
          height="500"
          src={
            "https://www.youtube.com/embed/" +
            searchParams.get("v") +
            "?si=bk4jeuvWkJFs5-pg?&autoplay=1&mute=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      {data && <p className="font-bold text-2xl px-2 py-1">{data?.title}</p>}
      <div className="flex ml-2 my-3 shadow-md  py-2">
        <div className="flex">
          <img
            className="w-12 h-12 rounded-full"
            src={data?.thumbnails?.default?.url}
            alt=""
          />
          <div className="flex flex-col ml-3 ">
            <div className="flex">
              <p className="text-lg font-semibold">{truncatedChannelTitle}</p>
              <MdVerified className="mt-2 ml-1" />
            </div>
            <div className="flex">
            <p className="text-gray-600">
              {stats &&
                (stats.viewCount.length > 3
                  ? stats.viewCount.slice(0, -3)
                  : stats.viewCount)}
              K
            </p>
            <p className="px-1">subscribers</p>
            </div>
            
          </div>
          <button
            onClick={() => setsubscribed(!subscribed)}
            className="ml-11 bg-black hover:bg-gray-800 text-white font-bold h-12 px-4 rounded-full"
          >
            {subscribed === true ? "Subscribed" : "Subscribe"}
          </button>
        </div>

        <div className="flex ml-64 space-x-3">
          <div className="flex">
            <button
              onClick={() => setlike(!like)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 border border-r-gray-500 font-semibold px-5 h-11 rounded-l-full"
            >
              <div className="flex">
                {like === true ? (
                  <AiFillLike className="w-6 h-6" />
                ) : (
                  <AiOutlineLike className="w-6 h-6" />
                )}
                <p className="ml-2">
                  {stats &&
                    (stats.likeCount.length > 3
                      ? stats.likeCount.slice(0, -3)
                      : stats.likeCount)}
                  K
                </p>
              </div>
            </button>
            <button
              onClick={() => setdislike(!dislike)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-900  font-semibold px-5 h-11 rounded-r-full"
            >
              <div className="flex">
                {dislike === true ? (
                  <BiSolidDislike className="w-6 h-6" />
                ) : (
                  <BiDislike className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-5 h-11 rounded-full">
            <div className="flex">
              <IoIosShareAlt className="w-6 h-6" />
              <p className="ml-2">Share</p>
            </div>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-5 h-11 rounded-full">
            <div className="flex">
              <LiaDownloadSolid className="w-6 h-6" />
              <p className="ml-2">Download</p>
            </div>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-4 h-11 rounded-full">
            <div className="flex">
              <MdOutlineMoreHoriz className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
      <div className="">
        <Description
          publishedAt={data?.publishedAt}
          description={data?.description}
        />
      </div>

      <CommentsContainer commentCount={stats?.commentCount} />
    </div>
  );
};

export default WatchPage;
