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
    dispatch(closeMenu());
    getVideos();
  }, [dispatch, searchParams]);

  return (
    <div className="ml-10 w-[1000px] flex flex-col relative">
      <div className="flex">
        <div className="px-2">
          <iframe
            className="rounded-lg"
            width="950"
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

      <div className="absolute top-[550px] left-0">
        {data && (
          <div>
            <p className={`font-bold text-xl px-2 py-2`}>{data?.title}</p>
          </div>
        )}
        <BelowVideoFrame data={data} stats={stats} />
        <Description
          publishedAt={data?.publishedAt}
          description={data?.description}
        />
        <CommentsContainer commentCount={stats?.commentCount} />
      </div>
    </div>
  );
};

export default WatchPage;
