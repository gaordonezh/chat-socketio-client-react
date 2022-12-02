import dayjs from "dayjs";
import {
  createContext,
  Dispatch,
  LegacyRef,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { RolEnum } from "../interfaces/enums";
import { ContactProps, MessageProps, UserProps } from "../interfaces/types";
import { tempUsers } from "../utils/consts";

interface ContextProps {
  socket: Socket;
  contacts: Array<ContactProps>;
  setSelectedClient: Dispatch<SetStateAction<null | ContactProps>>;
  selectedClient: null | ContactProps;
  messages: Array<MessageProps>;
  handleSendMessage: (content: string) => void;
  user: null | UserProps;
  bottomRef: LegacyRef<HTMLDivElement>;
}

interface WebSocketProviderProps {
  children: ReactNode;
}

const socket = io("http://localhost:3000");

const WebSocket = createContext({} as ContextProps);

export const useWebSocketContext = () => useContext(WebSocket);

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [contacts, setContacts] = useState<Array<ContactProps>>([]);
  const [messages, setMessages] = useState<Array<MessageProps>>([]);
  const [selectedClient, setSelectedClient] = useState<null | ContactProps>(null);
  const [user, setUser] = useState<null | UserProps>(null);

  useEffect(() => {
    if (user) {
      socket.on("connect_client", ({ connection }) => {
        if (connection) {
          socket.emit("first_connection", {
            headquarter_id: user.headquarter,
            company_url: "ym",
            isAdmin: user.rol === RolEnum.SUPERNAP,
          });
          socket.on("send_headquarters", (list) => {
            setContacts([...list]);
          });
        }
      });
    }
  }, [user]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    const storeKey = "user";
    const stored = sessionStorage.getItem(storeKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser({ ...parsed });
    } else {
      const randomIndex = Math.floor(Math.random() * 4);
      const extracted = tempUsers[randomIndex];
      sessionStorage.setItem(storeKey, JSON.stringify(extracted));
      setUser({ ...extracted });
    }
  };

  useEffect(() => {
    if (messages.length) bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [messages]);

  const companyId = user?.company || selectedClient?.company;

  useEffect(() => {
    if (selectedClient && user) {
      socket.emit("get_messages", {
        room: selectedClient._id,
        company_id: companyId,
      });

      socket.on("message_list", (response: Array<MessageProps>) => {
        setMessages([...response]);
      });
    }
  }, [selectedClient]);

  const handleSendMessage = (content: string) => {
    socket.emit("create_message", {
      content,
      datetime: dayjs().toISOString(),
      company: companyId,
      room: selectedClient?._id,
      sender: user?._id,
    });
  };

  return (
    <WebSocket.Provider
      value={{ socket, contacts, selectedClient, setSelectedClient, messages, handleSendMessage, user, bottomRef }}
    >
      {children}
    </WebSocket.Provider>
  );
};
export default WebSocketProvider;
