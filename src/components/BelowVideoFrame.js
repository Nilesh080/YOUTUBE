import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { LiaDownloadSolid } from "react-icons/lia";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdVerified } from "react-icons/md";

const BelowVideoFrame = ({ data, stats }) => {
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [subscribed, setsubscribed] = useState(false);
  const channelTitleWords = data?.channelTitle?.split(" ");
  const truncatedChannelTitle = channelTitleWords?.slice(0, 1).join(" ");

  return (
    <div className="flex ml-2 my-3 shadow-md py-2 w-[900px]">
      <div className="flex">
        <img
          className="w-12 h-12 rounded-full"
          src={data?.thumbnails?.default?.url}
          alt=""
        />
        <div className="flex flex-col ml-3 ">
          <div className="flex">
            <p className="text-md font-semibold">{truncatedChannelTitle}</p>
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
          className="ml-11 bg-black hover:bg-gray-800 text-white h-12 px-4 rounded-full"
        >
          {subscribed === true ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="flex ml-[9rem] space-x-3">
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
    
  );
};

export default BelowVideoFrame;
