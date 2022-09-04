import { FC } from "react";
import { Facebook, Twitter } from "react-feather";
import {
    Modal,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Text,
    Anchor,
    HRLine,
    Nav,
    NavLink,
} from "@doar/components";
import { StyledClose, StyledTitle, StyledWrap, StyledLabel } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ShareModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>×</StyledClose>
                <StyledTitle>Share With Others</StyledTitle>
                <StyledWrap>
                    <StyledLabel htmlFor="file-share">Other users:</StyledLabel>
                    <Input
                        name="file-share"
                        id="file-share"
                        placeholder="Enter names or email addresses"
                    />
                    <Text mt="10px">
                        Rights: <Anchor path="#!">Allow editing </Anchor>
                    </Text>
                    <HRLine />
                    <StyledLabel>More:</StyledLabel>
                    <Nav customStyle="social">
                        <NavLink
                            path="https://facebook.com"
                            rel="noopener"
                            target="_blank"
                        >
                            <Facebook />
                        </NavLink>
                        <NavLink
                            path="https://twitter.com"
                            rel="noopener"
                            target="_blank"
                        >
                            <Twitter />
                        </NavLink>
                    </Nav>
                </StyledWrap>
            </ModalBody>
            <ModalFooter>
                <Button>Share</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ShareModal;
