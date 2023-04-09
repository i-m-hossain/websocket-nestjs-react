import React, { useContext, useEffect, useState } from "react";
import { WebsocketContext } from "../context/WebsocketContext";

type MessagePayload = {
    content: string;
    message: string;
};

function Chat() {
    const socket = useContext(WebsocketContext);
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState<string[]>([]);
    useEffect(() => {
        socket.on("connect", () => {
            console.log("connected to the gateway");
        });
        socket.on("onMessage", (data: MessagePayload) => {
            setChats((prev) => [...prev, data.content]);
        });
        return () => {
            console.log("un-registering events...");
            socket.off("connect");
            socket.off("onMessage");
        };
    }, []);
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        socket.emit("newMessage", message);
        setMessage("");
    };
    return (
        <>
            <h1>Let's chat</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
            <div>
                {chats.map((chat,i) => (
                    <p key={i}>{chat}</p>
                ))}
            </div>
        </>
    );
}

export default Chat;
