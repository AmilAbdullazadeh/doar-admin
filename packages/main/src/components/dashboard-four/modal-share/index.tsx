import { FC } from "react";
import { X } from "react-feather";
import {
    Modal,
    ModalBody,
    Input,
    InputGroup,
    InputGroupAddon,
    Button,
} from "@doar/components";
import { StyledClose, StyledTitle, StyledText } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalShare: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>
                    <X size={20} />
                </StyledClose>
                <StyledTitle>Share Report</StyledTitle>
                <StyledText>Share this link to your friend to grant</StyledText>
                <InputGroup mb="5px">
                    <Input
                        type="text"
                        name="share-report"
                        id="share-report"
                        placeholder="https://www.example.com"
                        value="https://www.example.com"
                        readonly
                    />
                    <InputGroupAddon>
                        <Button variant="outlined" color="light">
                            Share
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </ModalBody>
        </Modal>
    );
};

export default ModalShare;
