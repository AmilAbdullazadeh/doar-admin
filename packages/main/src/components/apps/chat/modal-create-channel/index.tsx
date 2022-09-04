import { FC } from "react";
import { X } from "react-feather";
import { Modal, ModalBody, Input, Button } from "@doar/components";
import { StyledClose, StyledTitle, StyledFooter } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalCreateChannel: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose} size="sm">
            <ModalBody p="20px">
                <StyledClose onClose={onClose}>
                    <X size={20} />
                </StyledClose>
                <StyledTitle>Create Channel</StyledTitle>
                <Input
                    type="text"
                    name="create-channel"
                    id="create-channel"
                    placeholder="Channel name"
                />
            </ModalBody>
            <StyledFooter>
                <Button color="secondary" fontSize="13px" onClick={onClose}>
                    Cancel
                </Button>
                <Button fontSize="13px">Create</Button>
            </StyledFooter>
        </Modal>
    );
};

export default ModalCreateChannel;
