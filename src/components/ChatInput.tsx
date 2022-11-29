import { useState } from "react";
import { BorderColor, Image, InsertEmoticon, NearMe } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { useWebSocketContext } from "../context/webSocketContext";
import Input from "./Input";

const ChatInput = () => {
  const { handleSendMessage } = useWebSocketContext();
  const [content, setContent] = useState<string>("");

  const handleSend = () => {
    handleSendMessage(content);
    setContent("");
  };

  return (
    <Input
      size="medium"
      fullWidth
      sx={{ borderRadius: 20, overflow: "hidden", border: "1px solid #aaa" }}
      placeholder="Ingresar un mensaje..."
      value={content}
      onChange={(event) => setContent(event.target.value)}
      onKeyUp={(event) => event.key === "Enter" && handleSend()}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <BorderColor />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Image />
            </IconButton>
            <IconButton>
              <InsertEmoticon />
            </IconButton>
            <IconButton onClick={handleSend}>
              <NearMe />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default ChatInput;
