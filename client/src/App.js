import Jimp from "jimp/es";
import "./App.css";
import TopBar from "./TopBar";
import ChatList from "./ChatList";
import UnderBar from "./UnderBar";
import { useState, useEffect, useRef } from "react";
import { useChats } from "./hooks/useChats";
import { useNickName } from "./hooks/useNickName";

function App() {  
  const { chats, send, remove, joinRoom, setNumber } = useChats();
  const nickName = useNickName();


  const ref = useRef();

  useEffect(() => {

    if(ref.current < chats.length){
      window.scrollBy(0, window.innerHeight);
    }
    // window.scrollBy(0, window.innerHeight);
    ref.current = chats.length;
    
  }, [chats])

  const onJoinRoom = (num) => {
    joinRoom(num, nickName);
    setNumber(num);
  }

  const [message, setMessage] = useState("");

  const onChange = (event) => {
    setMessage(event.target.value);
  };
  
  // 메시지 삭제
  const onRemove = (id) => {
    remove(id);
  };

  // 메시지 전송
  const onSubmit = (event) => {
    event.preventDefault();

    if( message === ""){
      return
    }

    send(nickName, message);

    setMessage("");
  };
  
  return (
    <>
      <TopBar nickName={nickName} onJoinRoom={onJoinRoom} />
      <ChatList chats={chats} nickName={nickName} onRemove={onRemove} />
      <UnderBar message={message} onChange={onChange} onSubmit={onSubmit} />
    </>
  );
}

export default App;
