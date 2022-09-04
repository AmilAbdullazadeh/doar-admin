import { FC, useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter,
} from "./modal";
import { Button } from "../button/button";

interface IProps {
    centered?: boolean;
    size?: "xl" | "lg" | "md" | "sm";
}

const DemoModal: FC<IProps> = ({ size, centered }) => {
    const [show, setShow] = useState(false);
    const clickHandler = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <Modal
                show={show}
                onClose={clickHandler}
                size={size}
                centered={centered}
            >
                <ModalHeader>
                    <ModalTitle>Modal Title</ModalTitle>
                    <ModalClose onClose={clickHandler}>x</ModalClose>
                </ModalHeader>
                <ModalBody>
                    <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using &apos;Content here, content
                        here&apos;, making it look like readable English.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={clickHandler}>
                        Close
                    </Button>
                    <Button color="primary">Save changes</Button>
                </ModalFooter>
            </Modal>
            <Button onClick={clickHandler}>Open Modal</Button>
        </>
    );
};

export default DemoModal;
