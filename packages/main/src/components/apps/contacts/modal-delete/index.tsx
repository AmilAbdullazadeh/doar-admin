import { FC } from "react";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
    Text,
    Button,
} from "@doar/components";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalDelete: FC<IProps> = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose} size="sm">
            <ModalHeader>
                <ModalTitle>Delete Contact</ModalTitle>
                <ModalClose onClose={onClose}>×</ModalClose>
            </ModalHeader>
            <ModalBody>
                <Text mb="0px">Do you really want to delete this contact?</Text>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button>Continue Delete</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalDelete;
