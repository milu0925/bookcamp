import { useAuth } from "@/hooks/auth-context";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function Forum() {
  const domain = process.env.NEXT_PUBLIC_SOCKET;
  const { auth } = useAuth();
  const [socket, setSocket] = useState(); //socket主連線
  const [chat, setChat] = useState([]); // 所有內容
  const [message, setMessage] = useState(""); // 我發的一條訊息
  const [peoples, setPeople] = useState(0);
  // 隨機產生一組亂數給會員使用
  const [visitor, setVisitor] = useState();
  useEffect(() => {
    const visit = Math.floor(100000 + Math.random() * 900000); // 給進入頁面的人一組亂數序號
    setVisitor(visit);
  }, [setVisitor]);
  //傳送訊息
  const handleSendMessage = () => {
    let sendMessage = {
      id: visitor,
      name: auth.user.name,
      content: message,
    };
    socket.emit("message", sendMessage);
  };
  //啟動SOCKET
  useEffect(() => {
    const socket = io(`${domain}`);
    setSocket(socket);
    //與socket連線。
    socket.on("connect", () => {
      setSocket(socket); // Socket.IO 連接成功
    });
    socket.on("disconnect", () => {
      setSocket(""); //Socket.IO 連接已斷開
    });
    //接收後端傳回的資料,加入聊天群陣列
    socket.on("message", (data) => {
      setChat((prev) => [...prev, data]);
    });
    //接收後端傳回的總人數
    socket.on("peoples", (number) => {
      setPeople(number);
    });

    // 組件卸載時關閉 Socket.IO 連接
    return () => {
      socket.disconnect();
    };
  }, [setSocket, setPeople, domain]);

  return (
    <div className="socket">
      <h1>人數：{peoples}</h1>
      <input
        type="text"
        onChange={(e) => {
          setMessage(e.currentTarget.value);
        }}
      />
      <button onClick={handleSendMessage}>送出</button>
      <div className="socket-layout">
        {chat.map((v, i) => (
          <div
            key={i}
            className={`socket-col ${v.id == visitor ? "socket-right" : ""}`}
          >
            {v.id == visitor ? "" : <div>{v.name}</div>}
            <div>{v.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
