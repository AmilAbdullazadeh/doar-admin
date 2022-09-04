import { FC } from "react";
import {
    ChevronDown,
    UserPlus,
    PlusSquare,
    Server,
    Bell,
    Zap,
    Edit3,
    ShieldOff,
} from "react-feather";
import {
    Avatar,
    AvatarInitial,
    Text,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    DropdownDivider,
} from "@doar/components";
import { StyledWrap, StyledMedia } from "./style";

const SidebarHeader: FC = () => {
    return (
        <StyledWrap direction="down">
            <DropdownToggle variant="texted" className="dropdown-toggle">
                <StyledMedia>
                    <Avatar size="sm" mr="8px">
                        <AvatarInitial>T</AvatarInitial>
                    </Avatar>
                    <Text as="span" color="text" fontWeight={600}>
                        TeamName
                    </Text>
                </StyledMedia>
                <Text as="span" color="text3" lineHeight={1}>
                    <ChevronDown size={18} />
                </Text>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem path="#!">
                    <UserPlus /> Invite People
                </DropdownItem>
                <DropdownItem path="#!">
                    <PlusSquare /> Create Channel
                </DropdownItem>
                <DropdownItem path="#!">
                    <Server /> Server Settings
                </DropdownItem>
                <DropdownItem path="#!">
                    <Bell /> Notification Settings
                </DropdownItem>
                <DropdownItem path="#!">
                    <Zap /> Privacy Settings
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem path="#!">
                    <Edit3 /> Edit Team Details
                </DropdownItem>
                <DropdownItem path="#!">
                    <ShieldOff /> Hide Muted Channels
                </DropdownItem>
            </DropdownMenu>
        </StyledWrap>
    );
};

export default SidebarHeader;
