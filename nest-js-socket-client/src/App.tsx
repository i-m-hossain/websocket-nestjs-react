import { useState } from "react";
import Chat from "./Components/Chat";
import { socket, WebsocketContext } from "./context/WebsocketContext";
function App() {
    return (
        <WebsocketContext.Provider value={socket}>
          <Chat/>
        </WebsocketContext.Provider>
    );
}

export default App;
