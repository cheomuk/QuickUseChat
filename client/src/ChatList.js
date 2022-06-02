import React from "react";
import { FiX } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import "./ChatList.css";
import Avatar from "react-avatar";

const ChatList = (props) => {
  const nickName = props.nickName;

  return (
    <div className="chatBoxWrap">
      {props.chats.map((item, index) => (
        <div
        key={item.id}
          className="chatArea"
          style={
            item.sender !== nickName
              ? {}
              : { right: "-98%", transform: "translateX(-100%)" }
          }
        >
          <div
            className="nickName"
            style={
              item.sender === nickName
                ? { display: "none" }
                : { alignItems: "flex-start" }
            }
          >
            {item.sender}
          </div>

          <Avatar
            className="user"
            round={true}
            name={item.sender}
            size="2.5rem"
            style={
              (item.sender === nickName) ? { display: "none" } : { float: "left" }
            }
          />

          {/* 메시지 정렬 */}
          <div
            className="chatMessage"
            style={
              item.sender !== nickName ? { float: "left" } : { float: "right" , marginRight: "10px" }
            }
            onLoad={function () {
              window.scrollBy(0, window.innerHeight);
            }}
          >
            { item.message }
          </div>

          <span
            className="showTime"
            style={
              item.sender !== nickName ? { float: "left" } : { float: "right" }
            }
          >
            {item.date}
          </span>

          {/* 삭제 버튼 */}
          <FiX
            size="11px"
            className="onDeleteClick"
            style={item.sender === nickName ? { float: "right" } : {}}
            onClick={() => props.onRemove(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default ChatList;
