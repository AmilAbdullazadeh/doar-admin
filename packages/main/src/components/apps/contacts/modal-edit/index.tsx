import { FC } from "react";
import {
    Modal,
    ModalBody,
    ModalFooter,
    Avatar,
    AvatarInitial,
    Heading,
    Input,
    Textarea,
    Button,
} from "@doar/components";
import ContactEditPhoto from "../edit-photo-button";
import {
    StyledClose,
    StyledTitle,
    StyledDesc,
    StyledWrap,
    StyledLeft,
    StyledRight,
    StyledAvatar,
    StyledGroup,
} from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalEdit: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>×</StyledClose>
                <StyledTitle>Edit Contact</StyledTitle>
                <StyledDesc>
                    You can add more information than what you see here, such as
                    address and birthday by clicking.
                </StyledDesc>
                <StyledWrap>
                    <StyledLeft>
                        <StyledAvatar>
                            <Avatar size="xxl">
                                <AvatarInitial bg="gray700" fontWeight={400}>
                                    A
                                </AvatarInitial>
                            </Avatar>
                            <ContactEditPhoto />
                        </StyledAvatar>
                    </StyledLeft>
                    <StyledRight>
                        <Heading mb="10px">Personal Information</Heading>
                        <StyledGroup>
                            <Input
                                name="edit-fname"
                                id="edit-fname"
                                placeholder="First Name"
                                value="Abigal"
                            />
                        </StyledGroup>
                        <StyledGroup>
                            <Input
                                name="edit-lname"
                                id="edit-lname"
                                placeholder="Last Name"
                                value="Johnson"
                            />
                        </StyledGroup>
                        <Heading mb="10px" mt="20px">
                            Contact Information
                        </Heading>
                        <StyledGroup>
                            <Input
                                name="edit-phone"
                                id="edit-phone"
                                placeholder="Phone Number"
                                value="+1 234 567 8910"
                            />
                        </StyledGroup>
                        <StyledGroup>
                            <Input
                                name="edit-email"
                                id="edit-email"
                                placeholder="Email"
                                value="me@company.me"
                            />
                        </StyledGroup>
                        <Heading mb="10px" mt="20px">
                            Notes
                        </Heading>
                        <StyledGroup>
                            <Textarea
                                name="edit-notes"
                                id="edit-notes"
                                placeholder="Add notes"
                            />
                        </StyledGroup>
                    </StyledRight>
                </StyledWrap>
            </ModalBody>
            <ModalFooter>
                <Button mb={["5px", 0]}>Save Changes</Button>
                <Button ml="5px" color="secondary" onClick={onClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalEdit;
