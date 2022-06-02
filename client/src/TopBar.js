import "./TopBar.css";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { AiOutlineLeft } from "react-icons/ai";

const TopBar = (props) => {
  const askExit = () =>
    Swal.fire({
      icon: "warning",
      html: "정말로 대화를 종료하시겠습니까?",
      showCancelButton: true,
      showCloseButton: true,
      focusConfirm: false,
      cancelButtonText: "cancel",
      confirmButtonText: "ok",
    }).then((result) => {
      if (result.value) {
        window.close();
      }
    });
    const onChange = (e) => {
      props.onJoinRoom(e.target.value);
    }

    useEffect(()=>{
      props.onJoinRoom(0);
    },[props.nickName]);
    
  return (
    <>
      <div className="topBar">
      <AiOutlineLeft className="btnExit" onClick={askExit} />
        <p className="chatName">QuickUseChat</p>
        <select className="room" onChange={(e)=>onChange(e)}>
          <option value={0}>1번방</option>
          <option value={1}>2번방</option>
          <option value={2}>3번방</option>
          <option value={3}>4번방</option>
          <option value={4}>5번방</option>
        </select>
      </div>
    </>
  );
};

export default TopBar;
