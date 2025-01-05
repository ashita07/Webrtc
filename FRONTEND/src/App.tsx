import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function sendMessage() {
    if (!socket) {
      return;
    }
    if (inputRef.current) {
      const message = inputRef.current.value;
      socket.send(message);
    } else {
      console.error("Input reference is null.");
    }
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (ev) => {
      alert(ev.data);
    };
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div>
          <input
            ref={inputRef}
            type="text"
            placeholder="messager"
            className="border-4 p-3 m-5 rounded-xl"
          />
        </div>
        <div>
          <button
            onClick={sendMessage}
            className="px-6 m-2 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
