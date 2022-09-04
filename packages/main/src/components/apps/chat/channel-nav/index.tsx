import { FC, useState } from "react";
import { UserPlus, Users } from "react-feather";
import ReactTooltip from "react-tooltip";
import ModalInvitePeople from "../modal-invite-people";
import { useAppDispatch } from "../../../../redux/hooks";
import { toggleSidebar } from "../../../../redux/slices/chat-ui";
import { StyledNav, StyledButton } from "./style";

const ChannelNav: FC = () => {
    const dispatch = useAppDispatch();
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow((prev) => !prev);
    };
    const handleSidebar = () => {
        dispatch(toggleSidebar());
    };

    return (
        <>
            <StyledNav>
                <StyledButton
                    onClick={handleModal}
                    data-tip="Invite People"
                    data-for="tooltip-invite"
                >
                    <UserPlus />
                </StyledButton>
                <ReactTooltip place="left" effect="solid" id="tooltip-invite" />
                <StyledButton
                    $active
                    onClick={handleSidebar}
                    data-tip="Member List"
                    data-for="tooltip-mlist"
                >
                    <Users />
                    <span>25</span>
                </StyledButton>
                <ReactTooltip place="left" effect="solid" id="tooltip-mlist" />
            </StyledNav>
            <ModalInvitePeople show={show} onClose={handleModal} />
        </>
    );
};

export default ChannelNav;
