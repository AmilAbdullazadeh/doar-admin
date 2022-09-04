import { FC, useState } from "react";
import { Edit2, Trash2, X } from "react-feather";
import moment from "moment";
import { Modal, ModalBody, Row, Col, Button } from "@doar/components";
import {
    StyledHeader,
    StyledTitle,
    StyledNav,
    StyledNavBtn,
    StyledLabel,
    StyledDate,
    StyledDesc,
    StyledDescWrap,
    StyledDetails,
    StyledForm,
} from "./style";
import EditEventForm from "../edit-event";
import { useAppDispatch } from "../../../../redux/hooks";
import { deleteEvent } from "../../../../redux/slices/event";

export interface IEventDetails {
    category:
        | "calendar"
        | "birthday"
        | "holiday"
        | "discover"
        | "meetup"
        | "other";
    bg: string;
    event: {
        id: string;
        title: string;
        start: string;
        end: string;
        description?: string;
    };
}

interface IProps {
    show: boolean;
    onClose: () => void;
    details: IEventDetails;
}

const EventDetails: FC<IProps> = ({ show, onClose, details }) => {
    const [showEdit, setShowEdit] = useState(false);
    const dispatch = useAppDispatch();
    const handleEdit = () => {
        setShowEdit((prev) => !prev);
    };

    const deleteHandler = () => {
        dispatch(
            deleteEvent({ id: details?.event.id, category: details?.category })
        );
        onClose();
    };

    return (
        <>
            <Modal show={show} onClose={onClose}>
                <StyledHeader bg={details.bg}>
                    <StyledTitle>{details.event?.title}</StyledTitle>
                    <StyledNav>
                        <StyledNavBtn type="button" onClick={handleEdit}>
                            <Edit2 />
                        </StyledNavBtn>
                        <StyledNavBtn onClick={deleteHandler}>
                            <Trash2 />
                        </StyledNavBtn>
                        <StyledNavBtn onClick={onClose}>
                            <X />
                        </StyledNavBtn>
                    </StyledNav>
                </StyledHeader>
                <ModalBody p={[20, 25]}>
                    {showEdit ? (
                        <StyledForm className="event-form">
                            <EditEventForm
                                category={details?.category}
                                id={details.event?.id}
                                title={details.event?.title}
                                startDate={details.event?.start}
                                endDate={details.event?.start}
                                description={details.event?.description}
                                onClose={onClose}
                            />
                        </StyledForm>
                    ) : (
                        <StyledDetails className="event-details">
                            <Row gutters={20}>
                                <Col sm={6} mb={16}>
                                    <StyledLabel>Start Date</StyledLabel>
                                    <StyledDate>
                                        {moment(details.event?.start).format(
                                            "MMMM DD YYYY, h:mm:ss A"
                                        )}
                                    </StyledDate>
                                </Col>
                                <Col sm={6} mb={16}>
                                    <StyledLabel>End Date</StyledLabel>
                                    <StyledDate>
                                        {moment(details.event?.end).format(
                                            "MMMM DD YYYY, h:mm:ss A"
                                        )}
                                    </StyledDate>
                                </Col>
                            </Row>
                            {details?.event?.description && (
                                <StyledDescWrap>
                                    <StyledLabel>Description</StyledLabel>
                                    <StyledDesc>
                                        {details.event.description}
                                    </StyledDesc>
                                </StyledDescWrap>
                            )}

                            <Button color="secondary" px={20} onClick={onClose}>
                                Close
                            </Button>
                        </StyledDetails>
                    )}
                </ModalBody>
            </Modal>
        </>
    );
};

export default EventDetails;
