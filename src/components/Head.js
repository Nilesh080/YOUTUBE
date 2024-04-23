import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/menuSlice";
import { YOUTUBE_SUGGEST_API } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { cacheResults } from "../utils/searchSlice";

const Suggestions = ({ suggestions }) => {
  return (
    <div className="bg-white rounded-b-md shadow-md w-1/2 border border-gray-300">
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <div className="mt-1 mr-2">
            <IoIosSearch />
          </div>

          <p className="mb-2">{suggestion}</p>
        </div>
      ))}
    </div>
  );
};

const Head = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const cache = useSelector(store => store?.searchSlice);
  
  useEffect(() => {
    const getSearchSuggestion = async () => {
      const data = await fetch(YOUTUBE_SUGGEST_API + search);
      const result = await data.json();
      setSuggestions(result[1]);
      dispatch(cacheResults({
        [search]: result[1]
      }))
    };
    const timer = setTimeout(() => {
      if(cache[search]){
        setSuggestions(cache[search]);
      }
      else{
        if (search !== "") {
          getSearchSuggestion();
        }
      }
      
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search, dispatch, cache]);

  

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <button className="pb-2" onClick={handleToggleMenu}>
          <img
            className="h-8"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt=""
          />
        </button>
        <img
          className="h-8 mx-4"
          src="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png?f=webp"
          alt="youtube logo"
        />
      </div>
      <div className="flex items-center col-span-10 relative">
        <input
          className="p-2 pl-10 w-1/2 border border-gray-600 rounded-l-full"
          type="text"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        {search !== "" && (
          <div
            className="absolute ml-[33rem] cursor-pointer"
            onClick={() => setSearch("")}
          >
            <RxCross1 className="w-6 h-6" />
          </div>
        )}

        <button className="h-10.5 p-2 w-16 border border-gray-600 rounded-r-full bg-gray-100">
          <img
            className="h-6 pl-2"
            src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
            alt=""
          />
        </button>
        {search !== "" && (
          <div className="absolute top-12 left-0 w-full">
            <Suggestions suggestions={suggestions} />
          </div>
        )}
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Head;
