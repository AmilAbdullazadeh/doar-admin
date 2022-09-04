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
    Select,
    Row,
    Col,
} from "@doar/components";
import { IEvent } from "@doar/shared/types";
import { StyledTitle, StyledClose, StyledGroup, StyledLabel } from "./style";
import DatePicker from "../../../date-picker";
import TimePicker from "../../../time-picker";
import { useAppSelector, useAppDispatch } from "../../../../redux/hooks";
import { createEvent } from "../../../../redux/slices/event";

interface IProps {
    show: boolean;
    onClose: () => void;
    currentDate: {
        start: Date;
        end: Date;
    };
}

const CreateEvent: FC<IProps> = ({ show, onClose, currentDate }) => {
    const events: IEvent[] = useAppSelector(
        (state) => state?.events.eventSources
    );
    const dispatch = useAppDispatch();
    const [values, setValues] = useState({
        createAddTitle: "",
        createStartDate: "",
        createStartTime: "",
        createEndDate: "",
        createEndTime: "",
        createDescription: "",
        createCategory: "",
    });
    const [showState, setShowState] = useState(false);
    const [errors, setErrors] = useState({
        createAddTitle: true,
        createStartDate: false,
        createStartTime: false,
        createEndDate: false,
        createEndTime: false,
        createDescription: false,
        createCategory: true,
    });

    useEffect(() => {
        setValues((prev) => {
            return {
                ...prev,
                createStartDate: moment(currentDate.start.toString()).format(
                    "YYYY-MM-DD"
                ),
                createEndDate: moment(currentDate.end.toString()).format(
                    "YYYY-MM-DD"
                ),
            };
        });
    }, [currentDate]);

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
        const {
            createAddTitle,
            createStartDate,
            createEndDate,
            createCategory,
            createStartTime,
            createEndTime,
            createDescription,
        } = values;
        dispatch(
            createEvent(
                createAddTitle,
                createStartDate,
                createEndDate,
                createCategory,
                createStartTime,
                createEndTime,
                createDescription
            )
        );
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
                <StyledTitle>Create New Event</StyledTitle>
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
                            Start Date
                        </StyledLabel>
                        <Row gutters={10}>
                            <Col col={7}>
                                <DatePicker
                                    id="createStartDate"
                                    name="createStartDate"
                                    placeholder="Select Date"
                                    getDate={getDate}
                                    currentDate={currentDate.start}
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
                    <StyledGroup mt={30}>
                        <StyledLabel htmlFor="createEndDate">
                            End Date
                        </StyledLabel>
                        <Row gutters={10}>
                            <Col col={7}>
                                <DatePicker
                                    id="createEndDate"
                                    name="createEndDate"
                                    placeholder="Select Date"
                                    getDate={getDate}
                                    currentDate={currentDate.end}
                                />
                            </Col>
                            <Col col={5}>
                                <TimePicker
                                    id="createEndTime"
                                    name="createEndTime"
                                    value={values.createEndTime}
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
                    <StyledGroup>
                        <StyledLabel htmlFor="createCategory">
                            Category
                        </StyledLabel>
                        <Select
                            id="createCategory"
                            name="createCategory"
                            value={values.createCategory}
                            onChange={changeHandler}
                            showState={showState}
                            state={errors.createCategory ? "error" : "success"}
                            feedbackText="Category is required"
                        >
                            <option value="">Select Category</option>
                            {events.map((event) => (
                                <option
                                    value={event.category}
                                    key={event.category}
                                >
                                    {event.category}
                                </option>
                            ))}
                        </Select>
                    </StyledGroup>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={submitHandler} mr="5px">
                    Add Event
                </Button>
                <Button color="secondary" onClick={onClose}>
                    Discard
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateEvent;
