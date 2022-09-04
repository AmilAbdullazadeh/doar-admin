import { FC } from "react";
import { X } from "react-feather";
import { Modal, Row, Col, Input, HRLine, Nav, NavLink } from "@doar/components";
import Editor from "./editor";
import "react-quill/dist/quill.snow.css";
import { StyledHeader, StyledTitle, StyledBody } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ComposeMail: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose} size="lg">
            <StyledHeader>
                <StyledTitle>New Message</StyledTitle>
                <Nav customStyle="icon">
                    <NavLink path="#!" onClick={onClose}>
                        <X />
                    </NavLink>
                </Nav>
            </StyledHeader>
            <StyledBody>
                <form>
                    <Row alignItems="center">
                        <Col sm>Recipient:</Col>
                        <Col sm={10}>
                            <Input
                                name="email-recipient"
                                id="email-recipient"
                                placeholder="Enter recipient's email address"
                                px="0px"
                                borderWidth="0px"
                            />
                        </Col>
                    </Row>
                    <HRLine my="10px" />
                    <Row alignItems="center">
                        <Col sm>Subject:</Col>
                        <Col sm={10}>
                            <Input
                                name="email-subject"
                                id="email-subject"
                                placeholder="Enter Subject"
                                px="0px"
                                borderWidth="0px"
                            />
                        </Col>
                    </Row>
                    <Editor placeholder="Write your message here" />
                </form>
            </StyledBody>
        </Modal>
    );
};

export default ComposeMail;
