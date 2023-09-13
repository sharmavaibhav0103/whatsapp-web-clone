import React, { useState } from "react";
import SearchSection from "./SearchSection";
import Tick from "./svgs/Tick";

function ChatList() {
  const url =
    "https://pps.whatsapp.net/v/t61.24694-24/364077771_260540210103725_2119185399597368042_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQQvm1traOZuUaLXeeMPal8Jh7VIjnBsP5EyFQYjsw1kg&oe=650B0180&_nc_sid=000000&_nc_cat=105";
  const initialUserData = {
    users: [
      {
        id: 1,
        username: "Ram",
        profilePicture: "https://example.com/user1.jpg",
        lastMessage: "Hello there!",
        time: "10:30 Am",
      },
      {
        id: 2,
        username: "john_doe",
        profilePicture: "https://example.com/user2.jpg",
        lastMessage: "Hi, how are you?",
        time: "11:15",
      },
      {
        id: 3,
        username: "alice_smith",
        profilePicture: "https://example.com/user3.jpg",
        lastMessage: "Good morning!",
        time: "08:45",
      },
      {
        id: 4,
        username: "user4",
        profilePicture: "https://example.com/user4.jpg",
        lastMessage: "What's up?",
        time: "16:20",
      },
      {
        id: 5,
        username: "jane_doe",
        profilePicture: "https://example.com/user5.jpg",
        lastMessage: "I'm fine, thanks!",
        time: "14:00",
      },
      {
        id: 6,
        username: "user6",
        profilePicture: "https://example.com/user6.jpg",
        lastMessage: "See you later!",
        time: "19:30",
      },
      {
        id: 7,
        username: "sam_smith",
        profilePicture: "https://example.com/user7.jpg",
        lastMessage: "How's your day?",
        time: "12:10",
      },
      {
        id: 8,
        username: "user8",
        profilePicture: "https://example.com/user8.jpg",
        lastMessage: "It's going great!",
        time: "18:55",
      },
      {
        id: 9,
        username: "emily_jones",
        profilePicture: "https://example.com/user9.jpg",
        lastMessage: "I'm busy right now.",
        time: "09:20",
      },
      {
        id: 10,
        username: "user10",
        profilePicture: "https://example.com/user10.jpg",
        lastMessage: "Catch you later!",
        time: "17:40",
      },
    ],
  };

  const [userData, setUserData] = useState(initialUserData);

  return (
    <div className="chat-section">
      <SearchSection />

      <ul className="cl borde">
        {userData.users.map((user) => (
          <li key={user.id} className="cl-item flex borde flex-1 w-full pt-3">
            <img
              src={url}
              alt={user.username}
              className="cl-pic mx-2 mr-5 borde"
            />
            <div className="borde flex-1 pb-2 fb">
              <div className="flex borde cl-unt justify-between items-center">
                <h3 className="cl-username">{user.username}</h3>
                <p className="cl-time mr-3">{user.time}</p>
              </div>
              <div className="flex items-center cl-tnlm">
                <Tick />
                <p className="cl-lm">{user.lastMessage}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ChatList;
