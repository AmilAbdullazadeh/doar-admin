import { FC } from "react";
import { X } from "react-feather";
import {
    ModalBody,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
} from "@doar/components";
import { StyledModal, StyledClose, StyledTitle, StyledText } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalInvitePeople: FC<IProps> = ({ show, onClose }) => {
    return (
        <StyledModal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>
                    <X size={20} />
                </StyledClose>
                <StyledTitle>Invite People</StyledTitle>
                <StyledText>
                    Share this link to your friend to grant access and join to
                    this channel
                </StyledText>
                <InputGroup mb="5px">
                    <Input
                        type="text"
                        name="create-channel"
                        id="create-channel"
                        placeholder="https://www.example.com"
                        readonly
                    />
                    <InputGroupAddon>
                        <Button variant="outlined" color="light">
                            Copy
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </ModalBody>
        </StyledModal>
    );
};

export default ModalInvitePeople;
