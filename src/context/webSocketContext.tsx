import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { HeadquarterProps, MessageProps } from "../interfaces/types";

interface ContextProps {
  socket: Socket;
  headquarters: Array<HeadquarterProps>;
  setSelectedClient: Dispatch<SetStateAction<null | HeadquarterProps>>;
  selectedClient: null | HeadquarterProps;
  messages: Array<MessageProps>;
}

interface WebSocketProviderProps {
  children: ReactNode;
}

const WebSocket = createContext({} as ContextProps);

export const useWebSocketContext = () => useContext(WebSocket);

const tempInitialData = {
  from: "60e5cd48328de500159ab9a6",
  company: "ym",
};

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const socket = io("http://localhost:3000");

  const [headquarters, setHeadquarters] = useState<Array<HeadquarterProps>>([]);
  const [messages, setMessages] = useState<Array<MessageProps>>([]);
  const [selectedClient, setSelectedClient] = useState<null | HeadquarterProps>(null);

  useEffect(() => {
    socket.on("connect_client", (params) => {
      if (params.connection) {
        socket.emit("first_connection", { headquarter_id: tempInitialData.from, company_url: tempInitialData.company });
        socket.on("send_headquarters", (list) => {
          setHeadquarters([...list]);
        });
      }
    });
  }, []);

  useEffect(() => {
    if (selectedClient) {
      socket.emit("get_messages", {
        headquarterFrom: tempInitialData.from,
        headquarterTo: selectedClient._id,
        company: tempInitialData.company,
      });

      socket.on("message_list", (response: Array<MessageProps>) => {
        setMessages([...response]);
      });
    }
  }, [selectedClient]);

  return (
    <WebSocket.Provider value={{ socket, headquarters, selectedClient, setSelectedClient, messages }}>
      {children}
    </WebSocket.Provider>
  );
};
export default WebSocketProvider;
