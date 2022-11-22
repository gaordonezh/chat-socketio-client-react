import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface ContextProps {}

const WebSocket = createContext({} as ContextProps);

export const useWebSocketContext = () => useContext(WebSocket);

const WebSocketProvider = ({ children }: { children: ReactNode }) => {
  return <WebSocket.Provider value={{}}>{children}</WebSocket.Provider>;
};
export default WebSocketProvider;
