import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";
import { useContactItem } from "../../../../hooks";

const ContactLabels: FC = () => {
    const { activeId, clickHandler } = useContactItem("label-1");
    return (
        <>
            <Label>My Family</Label>
            <ContactItem
                id="label-1"
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="label-2"
                color="primary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <Label>My Friends</Label>
            <ContactItem
                id="label-3"
                color="secondary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="label-4"
                color="info"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="label-5"
                color="success"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <Label>My Officemates</Label>
            <ContactItem
                id="label-6"
                color="teal"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
        </>
    );
};

export default ContactLabels;
