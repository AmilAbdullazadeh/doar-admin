import { FC, useState, MouseEvent } from "react";
import Label from "../label";
import Item from "./item";
import { StyledWrap, StyledList } from "./style";

const SidebarMessages: FC = () => {
    const [activeId, setActiveId] = useState("");
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        let targetId = activeId;
        if (!target.classList.contains("media")) {
            const id = target.closest(".media")?.id;
            targetId = id || activeId;
        } else {
            targetId = target.id || activeId;
        }
        setActiveId(targetId);
    };

    return (
        <StyledWrap>
            <Label mb="10px" pl="10px">
                Direct Messages
            </Label>
            <StyledList>
                <Item
                    id="message-1"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    name="dfbot"
                    lastMsgTime="5 mins ago"
                />
                <Item
                    id="message-2"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="gray700"
                    name="situmay"
                    lastMsgTime="1 hour ago"
                />
                <Item
                    id="message-3"
                    activeId={activeId}
                    onClick={handleClick}
                    status="offline"
                    name="situmay"
                    bg="gray600"
                    lastMsgTime="1 hour ago"
                    unseenMsg={3}
                />
                <Item
                    id="message-4"
                    activeId={activeId}
                    onClick={handleClick}
                    status="offline"
                    bg="primary"
                    name="acantones"
                    lastMsgTime="2 hours ago"
                />
                <Item
                    id="message-5"
                    activeId={activeId}
                    onClick={handleClick}
                    status="offline"
                    bg="secondary"
                    name="rlabares"
                    lastMsgTime="2 hours ago"
                />
                <Item
                    id="message-6"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="success"
                    name="h.owen"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    id="message-7"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="info"
                    name="k.billie"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    id="message-8"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="teal"
                    name="m.audrey"
                    lastMsgTime="3 hours ago"
                />
                <Item
                    id="message-9"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="indigo"
                    name="macasindil"
                    lastMsgTime="4 hours ago"
                />
                <Item
                    id="message-10"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="pink"
                    name="e.ocaba"
                    lastMsgTime="4 hours ago"
                />
                <Item
                    id="message-11"
                    activeId={activeId}
                    onClick={handleClick}
                    status="online"
                    bg="cyan"
                    name="avendula"
                    lastMsgTime="5 hours ago"
                />
            </StyledList>
        </StyledWrap>
    );
};

export default SidebarMessages;
