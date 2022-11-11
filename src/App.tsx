import "./App.css";
import { io } from "socket.io-client";
import { useEffect } from "react";

var socket = io();

const App = () => {
  useEffect(() => {
    socket.on("connection", (socket) => {
      console.log("a user connected");
      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }, []);

  return (
    <div className="App">
      <h1>CHAT</h1>
      <div className="card">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          itaque quam quasi. Quibusdam iure ea corporis autem accusantium fugit
          sunt dolores cum iste quis, quisquam nemo similique labore ducimus
          repellat!
        </h1>
      </div>
    </div>
  );
};

export default App;
