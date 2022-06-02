import { useEffect, useState } from "react";
import { IoContext, useSocket } from "socket.io-react-hook";

const getDatetime = (date) => {
  date = new Date(date);

  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
  };
  return `${time.hours}:${time.minutes}`;
};

export const useChats = () => {
  const [chats, setChats] = useState([]);
  const [number, setNumber] = useState(0);

  const { socket, error } = useSocket('/', { transports: ['websocket'] });

  useEffect(() => {

    socket.on('send', (id, type, sender, data, time) => {
      setChats((value) => value.concat({id, type, sender, message: data, date: getDatetime(time)}));
    });

    socket.on('remove', (id) => {
      setChats((value) => value.filter((chat) => chat.id !== id));
    });
  }, [socket]);

  const send = (sender, message) => {
    socket.emit('send', 'text', sender, message, number);
  };

  const remove = (id) => {
    socket.emit("remove", id);
  };

  const joinRoom = (num, name) => {
    socket.emit("joinRoom", num, name)
  };

  return { chats, error, send, remove, joinRoom, setNumber };
};
