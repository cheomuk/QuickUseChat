const express = require('express'); // require 함수를 이용해 express 도구를 꺼내온다.
const { nanoid } = require('nanoid');
const fs = require('fs').promises;
const path = require('path')
const app = express();
const db = require('./model/db');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let room_list = ['room1', 'room2', 'room3', 'room4', 'room5'];

server.listen(4000, () => {
  console.log('Connect at 4000');
});

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  /**
   * 채팅 수신
   */
  socket.on('send', async (type, sender, data, num) => {
    const chat = await db.chatlist.create({
      type,
      sender,
      data
    });

    io.to(room_list[num]).emit('send', chat.id, chat.sender, chat.type, chat.data, chat.createdAt);
  });

  /**
   * 채팅 삭제
   */
  socket.on('remove', async (id) => {
    await db.chatlist.destroy({
      where: {  id  }
    });

    io.emit('remove', id);
  });

  /**
   * room 입장/퇴장
   */
  
   socket.on('joinRoom', (num, name) => {
    socket.join(room_list[num]);
    console.log(name + ' join a ' + room_list[num]);
  });

   socket.on('leaveRoom', (num, name) => {
    socket.leave(room_list[num]);
    console.log(name + ' leave a ' + room_list[num]);
  });
});