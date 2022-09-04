import { FC, useState } from "react";
import {
    Edit2,
    Trash,
    Facebook,
    Twitter,
    Instagram,
    GitHub,
} from "react-feather";
import {
    Heading,
    Text,
    Button,
    Row,
    Col,
    Nav,
    NavLink,
} from "@doar/components";
import ModalEdit from "../modal-edit";
import ModalDelete from "../modal-delete";
import Label from "../label-2";
import { StyledBar, StyledBtnWrap } from "./style";

const PersonalDetails: FC = () => {
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleEditModal = () => {
        setShowEdit((prev) => !prev);
    };
    const handleDeleteModal = () => {
        setShowDelete((prev) => !prev);
    };
    return (
        <>
            <StyledBar>
                <Heading mb="0px">Personal Details</Heading>
                <StyledBtnWrap>
                    <Button
                        size="sm"
                        color="white"
                        mr="5px"
                        hasIcon
                        iconSpace="5px"
                        onClick={handleEditModal}
                    >
                        <Edit2 />
                        <Text as="span" display={["none", "inline"]}>
                            Edit
                        </Text>
                    </Button>
                    <Button
                        size="sm"
                        color="white"
                        hasIcon
                        iconSpace="5px"
                        onClick={handleDeleteModal}
                    >
                        <Trash />
                        <Text as="span" display={["none", "inline"]}>
                            Delete
                        </Text>
                    </Button>
                </StyledBtnWrap>
            </StyledBar>
            <Row>
                <Col col={6} sm>
                    <Label>Firstname</Label>
                    <Text>Abigail</Text>
                </Col>
                <Col col={6} sm>
                    <Label>Middlename</Label>
                    <Text>Christensen</Text>
                </Col>
                <Col sm mt={["20px", 0]}>
                    <Label>Lastname</Label>
                    <Text>Johnson</Text>
                </Col>
            </Row>
            <Heading mt="40px" mb="20px">
                Contact Details
            </Heading>
            <Row gutters={20}>
                <Col col={6} sm={4}>
                    <Label>Mobile Phone</Label>
                    <Text color="primary" fontFamily="rubik">
                        +1 290 912 3868
                    </Text>
                </Col>
                <Col col={6} sm={4}>
                    <Label>Home Phone</Label>
                    <Text color="primary" fontFamily="rubik">
                        +1 011 342 3129
                    </Text>
                </Col>
                <Col col={6} sm={4} mt={["20px", 0]}>
                    <Label>Work Phone</Label>
                    <Text color="primary" fontFamily="rubik">
                        +1 100 003 3344
                    </Text>
                </Col>
                <Col sm={4} mt={["20px", "30px"]}>
                    <Label>Email Address</Label>
                    <Text color="primary">me@company.me</Text>
                </Col>
                <Col sm={4} mt={["20px", "30px"]}>
                    <Label>Company</Label>
                    <Text>Company Name, Inc.</Text>
                </Col>
                <Col sm={4} mt={["20px", "30px"]}>
                    <Label>Job Position</Label>
                    <Text>President &amp; CEO</Text>
                </Col>
                <Col sm={6} mt={["20px", "30px"]}>
                    <Label>Home Address</Label>
                    <Text>
                        4658 Kenwood Place <br /> Pompano Beach, FL 33060,
                        United States
                    </Text>
                </Col>
                <Col sm={6} mt={["20px", "30px"]}>
                    <Label>Work Address</Label>
                    <Text>
                        819 Waldeck Street <br /> Farmers Branch, TX 75244,
                        United States
                    </Text>
                </Col>
                <Col sm={6} mt={["20px", "30px"]}>
                    <Label>Personal Website</Label>
                    <Text color="primary">http://example.me/</Text>
                </Col>
                <Col sm={6} mt={["20px", "30px"]}>
                    <Label>Social Profiles</Label>
                    <Nav customStyle="social" className="nav-social">
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
                        <NavLink
                            path="https://instagram.com"
                            rel="noopener"
                            target="_blank"
                        >
                            <Instagram />
                        </NavLink>
                        <NavLink
                            path="https://github.com"
                            rel="noopener"
                            target="_blank"
                        >
                            <GitHub />
                        </NavLink>
                    </Nav>
                </Col>
                <Col sm mt={["20px", "30px"]}>
                    <Label>Notes</Label>
                    <Text fontSize="13px">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using &apos;Content here, content
                        here&apos;, making it look like readable English.
                    </Text>
                </Col>
            </Row>
            <ModalEdit show={showEdit} onClose={handleEditModal} />
            <ModalDelete show={showDelete} onClose={handleDeleteModal} />
        </>
    );
};

export default PersonalDetails;
