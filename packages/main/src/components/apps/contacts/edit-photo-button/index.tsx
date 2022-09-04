import { FC } from "react";
import { Edit2 } from "react-feather";
import { StyledEditPhoto } from "./style";

const ContactEditPhoto: FC = () => {
    return (
        <StyledEditPhoto>
            <Edit2 />
        </StyledEditPhoto>
    );
};

export default ContactEditPhoto;
