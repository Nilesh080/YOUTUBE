import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/menuSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { GOOGLE_API_KEY } from "../utils/constants";
import Description from "./Description";
import BelowVideoFrame from "./BelowVideoFrame";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [stats, setStats] = useState(null);
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store?.menuSlice?.isMenuOpen);
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
    setData(json?.items[0]?.snippet);
    setStats(json?.items[0]?.statistics);
  };

  return (
    <div className="ml-10 w-[1000px]">
      <div className="flex">
        <div className="px-2">
          <iframe
            className="rounded-lg"
            width="1100"
            height="550"
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
        {!isMenuOpen && (
          <div className="w-full">
            <LiveChat />
          </div>
        )}
      </div>

      {data && (
        <p className="font-bold text-2xl px-2 py-1 mt-[-68px]">{data?.title}</p>
      )}
      <BelowVideoFrame data={data} stats={stats} />
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
