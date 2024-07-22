import React, { useMemo } from "react";
import { ChatState } from "../Context/ChatProvider";
import ScrollableFeed from "react-scrollable-feed";
import { Avatar, Tooltip } from "@chakra-ui/react";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "./ChatLogic";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();
  const userId = user._id;

  const renderedMessages = useMemo(() => {
    return messages.map((m, i) => {
      const sameSender = isSameSender(messages, m, i, userId);
      const lastMessage = isLastMessage(messages, i, userId);
      const senderName = m.sender.name;
      const senderPic = m.sender.pic;
      const isUserSender = m.sender._id === userId;

      return (
        <div style={{ display: "flex" }} key={m._id}>
          {(sameSender || lastMessage) && (
            <Tooltip label={senderName} placement="bottom-start" hasArrow>
              <Avatar
                mt="7px"
                mr={1}
                size="sm"
                cursor="pointer"
                name={senderName}
                src={senderPic}
              />
            </Tooltip>
          )}
          <span
            style={{
              backgroundColor: isUserSender ? "#BEE3F8" : "#B9F5D0",
              marginLeft: isSameSenderMargin(messages, m, i, userId),
              marginTop: isSameUser(messages, m, i, userId) ? 3 : 10,
              borderRadius: "20px",
              padding: "5px 15px",
              maxWidth: "75%",
            }}
          >
            {m.content}
          </span>
        </div>
      );
    });
  }, [messages, userId]);

  return <ScrollableFeed>{messages && renderedMessages}</ScrollableFeed>;
};

export default ScrollableChat;
