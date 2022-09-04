import { FC, useEffect } from "react";
import { Heading } from "@doar/components";
import ScrollBar from "../../../../components/scrollbar";
import ChannelNav from "../../../../components/apps/chat/channel-nav";
import DirectNav from "../../../../components/apps/chat/direct-nav";
import SearchForm from "../../../../components/apps/chat/search-form";
import SettingsNav from "../../../../components/apps/chat/settings-nav";
import ChatGroup from "../../../../components/apps/chat/chat-group";
import ChatForm from "../../../../components/apps/chat/chat-form";
import MemberList from "../../../../components/apps/chat/member-list";
import DirectTitle from "../../../../components/apps/chat/direct-title";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { toggleSidebar } from "../../../../redux/slices/chat-ui";
import {
    StyledMain,
    StyledHeader,
    StyledHeaderRight,
    StyledBody,
    StyledBodyInner,
    StyledFooter,
    StyledSidebar,
} from "./style";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const { channel, chatType, rightSidebar } = useAppSelector(
        (state) => state.chatUI
    );
    const { sidebar } = useAppSelector((state) => state.ui);

    useEffect(() => {
        if (window.matchMedia("(max-width: 991px)").matches) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledMain className="content" $sidebar={sidebar}>
            <StyledHeader>
                {chatType === "channel" && (
                    <Heading mb="0px">#{channel}</Heading>
                )}
                {chatType === "direct" && <DirectTitle />}
                <StyledHeaderRight>
                    {chatType === "channel" && <ChannelNav />}
                    {chatType === "direct" && <DirectNav />}
                    <SearchForm />
                    <SettingsNav />
                </StyledHeaderRight>
            </StyledHeader>
            <StyledBody $showSidebar={rightSidebar}>
                <ScrollBar>
                    <StyledBodyInner>
                        <ChatGroup />
                    </StyledBodyInner>
                </ScrollBar>
            </StyledBody>
            <StyledFooter>
                <ChatForm />
            </StyledFooter>
            <StyledSidebar $showSidebar={rightSidebar}>
                <ScrollBar>
                    <MemberList />
                </ScrollBar>
            </StyledSidebar>
        </StyledMain>
    );
};

export default Main;
