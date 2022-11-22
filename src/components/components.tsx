import { ChangeEvent, useEffect, useState } from "react";
import { io } from "socket.io-client";

var socket = io("http://localhost:3000");

export const MessagesContainer = () => {
  const [messages, setMessages] = useState<Array<MessageProps>>([]);

  useEffect(() => {
    const receiveMessage = (msg: MessageProps) => {
      messages.unshift(msg);
      setMessages([...messages]);
    };

    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  return (
    <div className="p-2 border border-slate-100 rounded-md mb-2 shadow-sm shadow-cyan-100 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)]">
      {messages.map((item) => {
        const isMine = item.code === socket.id;

        return (
          <div className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}>
            <p
              className={`w-[calc(100%-50px)] border border-slate-200 rounded-md px-2 ${
                isMine ? "text-slate-500 font-medium" : "text-slate-600"
              }`}
            >
              {`${item.code}: ${item.message}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export const EntryMessage = () => {
  const handleSend = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const parsed = Object.fromEntries(form);

    socket.emit("message", parsed.message);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSend} className="flex flex-row items-center justify-center">
      <input
        name="message"
        required
        inputMode="text"
        className="border border-slate-400 rounded-l-lg p-2 w-full"
        placeholder="Message..."
      />
      <input
        type="submit"
        value="Enviar"
        className="rounded-r-lg border bg-cyan-500 border-cyan-500 text-white px-5 py-2 cursor-pointer w-[100px]"
      />
    </form>
  );
};

export const Register = ({ setUser }: { setUser: (params: { in: boolean; code: string }) => void }) => {
  const handleRegister = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const parsed = Object.fromEntries(form);
    socket.emit("register", parsed.user);
    socket.on("register_user_code", (code: string) => setUser({ in: true, code }));
    event.target.reset();
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-row items-center justify-center gap-3">
      <input
        name="user"
        required
        inputMode="text"
        className="border border-slate-400 rounded-lg p-2 w-full"
        placeholder="Ejm: Bot"
      />
      <input
        type="submit"
        value="Ingresar"
        className="rounded-lg border bg-cyan-500 border-cyan-500 text-white px-5 py-2 w-full cursor-pointer"
      />
    </form>
  );
};
