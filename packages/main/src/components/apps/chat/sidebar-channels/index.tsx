import { FC, useState, useEffect, MouseEvent } from "react";
import { PlusCircle } from "react-feather";
import { Badge } from "@doar/components";
import Label from "../label";
import ModalCreateChannel from "../modal-create-channel";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { toggleChannel } from "../../../../redux/slices/chat-ui";
import { toggleSidebar } from "../../../../redux/slices/ui";
import {
    StyledWrap,
    StyledHeader,
    StyledBtn,
    StyledNav,
    StyledLink,
} from "./style";

const SidebarChannels: FC = () => {
    const dispatch = useAppDispatch();
    const { chatType } = useAppSelector((state) => state.chatUI);
    const [show, setShow] = useState(false);
    const [activeId, setActiveId] = useState("");
    const handleModal = () => {
        setShow((prev) => !prev);
    };
    useEffect(() => {
        dispatch(toggleChannel({ channel: "general" }));
        setActiveId("channel-1");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const { channel } = target.dataset;
        setActiveId(target.id);
        dispatch(toggleSidebar({ isOpen: undefined }));
        if (!channel) return;
        dispatch(toggleChannel({ channel }));
    };

    return (
        <>
            <StyledWrap>
                <StyledHeader>
                    <Label>All Channels</Label>
                    <StyledBtn onClick={handleModal}>
                        <PlusCircle size={14} />
                    </StyledBtn>
                </StyledHeader>
                <StyledNav>
                    <StyledLink
                        id="channel-1"
                        path="#!"
                        $active={
                            activeId === "channel-1" && chatType === "channel"
                        }
                        onClick={handleClick}
                        data-channel="general"
                    >
                        # general
                    </StyledLink>
                    <StyledLink
                        id="channel-2"
                        path="#!"
                        $active={
                            activeId === "channel-2" && chatType === "channel"
                        }
                        onClick={handleClick}
                        data-channel="engineering"
                    >
                        # engineering
                    </StyledLink>
                    <StyledLink
                        id="channel-3"
                        path="#!"
                        $active={
                            activeId === "channel-3" && chatType === "channel"
                        }
                        onClick={handleClick}
                        data-channel="products"
                    >
                        # products
                        <Badge color="danger" shape="circle" ml="auto">
                            2
                        </Badge>
                    </StyledLink>
                </StyledNav>
            </StyledWrap>
            <ModalCreateChannel show={show} onClose={handleModal} />
        </>
    );
};

export default SidebarChannels;
