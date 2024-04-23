import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { MdSend } from "react-icons/md";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import BelowLiveChat from "./BelowLiveChat";


const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((store) => store?.chat?.message);
  const [message, setMessage] = useState("");
  const [showEmojiDropdown, setShowEmojiDropdown] = useState(false);

  const emojis = ["😊", "🤔", "🎉", "❤️", "😂", "😍", "👍", "👋"];

  const handleEmojiClick = (emoji) => {
    setShowEmojiDropdown(!showEmojiDropdown);
    setMessage(message + emoji);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Me",
        text: message,
      })
    );
    setMessage("");
  };

  useEffect(() => {
    //api polling
    const i = setInterval(() => {
      const name = generateRandomName();
      const message = generateRandomMessage();
      dispatch(
        addMessage({
          name: name,
          text: message,
        })
      );
    }, 700);
    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="border border-black bg-slate-50 h-[550px] w-[450px] ml-[18px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          //dont use index as key anytime
          chats &&
            chats.map((c, index) => (
              <ChatMessage key={index} name={c.name} message={c.text} />
            ))
        }
      </div>
      <form
        onSubmit={handleSubmit}
        className="ml-[18px] mt-2 flex justify-between items-center border border-gray-400 bg-gray-100 p-4 rounded-2xl"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Chat..."
          className="w-full py-2 px-3 rounded-2xl bg-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
        />
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowEmojiDropdown(!showEmojiDropdown)}
            className="ml-2 p-2 rounded-full hover:bg-gray-200 focus:outline-none"
          >
            <MdOutlineEmojiEmotions className="w-7 h-7" />
          </button>
          {showEmojiDropdown && (
            <div className="absolute bottom-full left-0 bg-white border border-gray-300 rounded-lg p-2 shadow-md z-10">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => handleEmojiClick(emoji)}
                  className="p-2 hover:bg-gray-200 focus:outline-none"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="ml-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black focus:outline-none"
        >
          <MdSend />
        </button>
      </form>
      
      <BelowLiveChat/>
      
    </>
  );
};

export default LiveChat;
