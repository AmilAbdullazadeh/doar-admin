import { FC, useState } from "react";
import { Save, Share2, Plus } from "react-feather";
import Breadcrumb from "../../../components/breadcrumb";
import ModalSave from "../../../components/dashboard-four/modal-save";
import ModalShare from "../../../components/dashboard-four/modal-share";
import ModalCreateTicket from "../../../components/dashboard-four/modal-create-ticket";
import {
    StyledWelcomeArea,
    StyledWelcomeLeft,
    StyledWelcomeRight,
    StyledButton,
} from "./style";

const WelcomeArea: FC = () => {
    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showTicketModal, setShowTicketModal] = useState(false);
    const handleSaveModal = () => {
        setShowSaveModal((prev) => !prev);
    };
    const handleShareModal = () => {
        setShowShareModal((prev) => !prev);
    };
    const handleTicketModal = () => {
        setShowTicketModal((prev) => !prev);
    };
    return (
        <>
            <StyledWelcomeArea>
                <StyledWelcomeLeft>
                    <Breadcrumb
                        prev={[{ text: "Dashboard", link: "/" }]}
                        title="Helpdesk Management"
                        wcText="Welcome To Dashboard"
                    />
                </StyledWelcomeLeft>
                <StyledWelcomeRight>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        onClick={handleSaveModal}
                    >
                        <Save />
                        Save
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        color="white"
                        hasIcon
                        ml="10px"
                        onClick={handleShareModal}
                    >
                        <Share2 />
                        Share
                    </StyledButton>
                    <StyledButton
                        size="sm"
                        ml="10px"
                        hasIcon
                        onClick={handleTicketModal}
                    >
                        <Plus />
                        Add New Ticket
                    </StyledButton>
                </StyledWelcomeRight>
            </StyledWelcomeArea>
            <ModalSave show={showSaveModal} onClose={handleSaveModal} />
            <ModalShare show={showShareModal} onClose={handleShareModal} />
            <ModalCreateTicket
                show={showTicketModal}
                onClose={handleTicketModal}
            />
        </>
    );
};

export default WelcomeArea;
