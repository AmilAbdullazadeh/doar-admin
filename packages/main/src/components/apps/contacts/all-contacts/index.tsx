import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";
import { useContactItem } from "../../../../hooks";

const AllContacts: FC = () => {
    const { activeId, clickHandler } = useContactItem("all-1");
    return (
        <>
            <Label size="lg">A</Label>
            <ContactItem
                id="all-1"
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-2"
                color="primary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-3"
                color="secondary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-4"
                color="success"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <Label size="lg">B</Label>
            <ContactItem
                id="all-5"
                color="pink"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-6"
                color="indigo"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-7"
                color="teal"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-8"
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <Label size="lg">C</Label>
            <ContactItem
                id="all-9"
                color="info"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-10"
                color="warning"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-11"
                color="danger"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-12"
                color="lightblue"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <Label size="lg">D</Label>
            <ContactItem
                id="all-13"
                color="cyan"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-14"
                color="orange"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-15"
                color="gray900"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="all-16"
                color="gray800"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
        </>
    );
};

export default AllContacts;
