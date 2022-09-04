import { FC } from "react";
import { Mail, Slash, User, MoreVertical } from "react-feather";
import {
    Avatar,
    AvatarInitial,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "@doar/components";
import { ICustomer } from "@doar/shared/types";
import {
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledNavIcon,
    StyledNavLink,
    StyledDropdown,
} from "./style";

const Item: FC<ICustomer> = ({
    id,
    name,
    image,
    bg,
    chat_link,
    profile_link,
}) => {
    const op = bg === "gray600" ? 1 : 0.5;
    return (
        <>
            <Avatar display={["none", "block"]}>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg} opacity={op}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <StyledListMiddle>
                <StyledListTitle>{name}</StyledListTitle>
                <StyledListText>Customer ID{id}</StyledListText>
            </StyledListMiddle>
            <StyledListEnd>
                <StyledNavIcon>
                    <StyledNavLink href={chat_link} display={["none", "block"]}>
                        <Mail size="24" />
                    </StyledNavLink>
                    <StyledNavLink href="#" display={["none", "block"]}>
                        <Slash size="24" />
                    </StyledNavLink>
                    <StyledNavLink
                        href={profile_link}
                        display={["none", "block"]}
                    >
                        <User size="24" />
                    </StyledNavLink>
                    <StyledDropdown direction="left">
                        <DropdownToggle variant="texted">
                            <MoreVertical size="18" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem path={chat_link}>
                                <Mail size="15" /> Messages
                            </DropdownItem>
                            <DropdownItem path={profile_link}>
                                <User size="15" />
                                Profile
                            </DropdownItem>
                            <DropdownItem path="#">
                                <Slash size="15" /> Delete
                            </DropdownItem>
                        </DropdownMenu>
                    </StyledDropdown>
                </StyledNavIcon>
            </StyledListEnd>
        </>
    );
};

export default Item;
