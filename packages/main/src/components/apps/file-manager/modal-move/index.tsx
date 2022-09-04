import { FC } from "react";
import { Folder } from "react-feather";
import {
    Modal,
    ModalBody,
    ModalFooter,
    Button,
    Nav,
    NavLink,
} from "@doar/components";
import { StyledClose, StyledTitle, StyledText, StyledWrap } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const MoveModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>×</StyledClose>
                <StyledTitle>Move Item to</StyledTitle>
                <StyledText>Please select a folder</StyledText>
                <StyledWrap>
                    <Nav customStyle="sidebar">
                        <NavLink path="#!">
                            <Folder /> Downloads
                        </NavLink>
                        <NavLink path="#!">
                            <Folder /> Personal Stuff
                        </NavLink>
                        <NavLink path="#!">
                            <Folder /> 3d Objects
                        </NavLink>
                        <NavLink path="#!">
                            <Folder /> Recordings
                        </NavLink>
                        <NavLink path="#!">
                            <Folder /> Support
                        </NavLink>
                    </Nav>
                </StyledWrap>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" mr={[null, "5px"]} onClick={onClose}>
                    Close
                </Button>
                <Button>Move</Button>
            </ModalFooter>
        </Modal>
    );
};

export default MoveModal;
