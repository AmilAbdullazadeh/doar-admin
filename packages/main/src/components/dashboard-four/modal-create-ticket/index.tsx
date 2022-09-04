/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { FC, useState, useEffect, ChangeEvent } from "react";
import moment from "moment";
import { X } from "react-feather";
import {
    Modal,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
    Row,
    Col,
} from "@doar/components";
import { StyledTitle, StyledClose, StyledGroup, StyledLabel } from "./style";
import DatePicker from "../../date-picker";
import TimePicker from "../../time-picker";

interface IProps {
    show: boolean;
    onClose: () => void;
}

const ModalCreateTicket: FC<IProps> = ({ show, onClose }) => {
    const [values, setValues] = useState({
        createAddTitle: "",
        createStartDate: "",
        createStartTime: "",
        createDescription: "",
        createCategory: "",
    });
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({
        createAddTitle: true,
        createStartDate: false,
        createStartTime: false,
        createDescription: false,
        createCategory: true,
    });

    useEffect(() => {
        setValues((prev) => {
            return {
                ...prev,
                createStartDate: moment(new Date()).format("YYYY-MM-DD"),
            };
        });
    }, []);

    const changeHandler = (
        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setValues((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
        setErrors((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value === "",
            };
        });
    };

    const getDate = (name: string, date: string) => {
        setValues((prev) => {
            return {
                ...prev,
                [name]: date,
            };
        });
    };

    const submitHandler = () => {
        setShowState(true);
        const hasError = Object.values(errors).find((err) => err);
        if (hasError) return;
        setValues((prev) => {
            return {
                ...prev,
                createAddTitle: "",
                createStartTime: "",
                createEndTime: "",
                createDescription: "",
                createCategory: "",
            };
        });
        onClose();
    };

    return (
        <Modal show={show} onClose={onClose}>
            <ModalBody p={["20px", "30px"]}>
                <StyledTitle>Create New Ticket</StyledTitle>
                <StyledClose onClose={onClose}>
                    <X />
                </StyledClose>
                <form className="create-event-form">
                    <StyledGroup>
                        <Input
                            id="createAddTitle"
                            name="createAddTitle"
                            placeholder="Add title"
                            value={values.createAddTitle}
                            onChange={changeHandler}
                            showState={showState}
                            state={errors.createAddTitle ? "error" : "success"}
                            feedbackText="Title is required"
                        />
                    </StyledGroup>
                    <StyledGroup mt={30}>
                        <StyledLabel htmlFor="createStartDate">
                            Date
                        </StyledLabel>
                        <Row gutters={10}>
                            <Col col={7}>
                                <DatePicker
                                    id="createStartDate"
                                    name="createStartDate"
                                    placeholder="Select Date"
                                    getDate={getDate}
                                    currentDate={new Date()}
                                />
                            </Col>
                            <Col col={5}>
                                <TimePicker
                                    id="createStartTime"
                                    name="createStartTime"
                                    value={values.createStartTime}
                                    onChange={changeHandler}
                                />
                            </Col>
                        </Row>
                    </StyledGroup>
                    <StyledGroup>
                        <Textarea
                            id="createDescription"
                            name="createDescription"
                            placeholder="Write some description (optional)"
                            value={values.createDescription}
                            onChange={changeHandler}
                        />
                    </StyledGroup>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={submitHandler} mr="5px">
                    Add Ticket
                </Button>
                <Button color="secondary" onClick={onClose}>
                    Discard
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalCreateTicket;
