import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";
import { useContactItem } from "../../../../hooks";

const RecentlyContacted: FC = () => {
    const { activeId, clickHandler } = useContactItem("recent-1");
    return (
        <>
            <Label>Recently Contacted</Label>
            <ContactItem
                id="recent-1"
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="recent-2"
                color="indigo"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="recent-3"
                color="pink"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="recent-4"
                color="primary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
        </>
    );
};

export default RecentlyContacted;
