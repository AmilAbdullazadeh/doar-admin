import { FC } from "react";
import {
    Modal,
    ModalBody,
    ModalFooter,
    Button,
    Row,
    Col,
    Textarea,
} from "@doar/components";
import { StyledClose, StyledTitle } from "./style";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const DetailsModal: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledClose onClose={onClose}>×</StyledClose>
                <StyledTitle>View Details</StyledTitle>
                <Row mb="10px">
                    <Col col={4}>Filename:</Col>
                    <Col col={8}>Medical Certificate.pdf</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>File Type:</Col>
                    <Col col={8}>PDF File</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>File Size:</Col>
                    <Col col={8}>10.45 KB</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>Created:</Col>
                    <Col col={8}>Monday, July 02, 2018 9:34am</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>Modified:</Col>
                    <Col col={8}>Monday, July 02, 2018 9:34am</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>Accessed:</Col>
                    <Col col={8}>Monday, July 02, 2018 9:34am</Col>
                </Row>
                <Row mb="10px">
                    <Col col={4}>Description:</Col>
                    <Col col={8}>
                        <Textarea
                            name="details-desc"
                            id="details-desc"
                            placeholder="Add description"
                            mt="5px"
                        />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" ml={[null, "5px"]} onClick={onClose}>
                    Close
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default DetailsModal;
