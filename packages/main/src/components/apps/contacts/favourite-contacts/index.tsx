import { FC } from "react";
import Label from "../label";
import ContactItem from "../contact-item";
import { useContactItem } from "../../../../hooks";

const FavouriteContacts: FC = () => {
    const { activeId, clickHandler } = useContactItem("label-1");
    return (
        <>
            <Label>My Favourites</Label>
            <ContactItem
                id="fav-1"
                color="gray700"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="fav-2"
                color="primary"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="fav-3"
                color="pink"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
            <ContactItem
                id="fav-4"
                color="teal"
                name="Abigail Johnson"
                phone="+1-234-567-890"
                activeId={activeId}
                onClick={clickHandler}
            />
        </>
    );
};

export default FavouriteContacts;
