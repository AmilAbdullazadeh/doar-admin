import { FC, useState } from "react";
import { Button } from "@doar/components";
import ComposeMail from "../compose-mail";
import { StyledWrap } from "./style";

const ComposeBtn: FC = () => {
    const [show, setShow] = useState(false);
    const handleModal = () => {
        setShow((prev) => !prev);
    };

    return (
        <>
            <StyledWrap>
                <Button onClick={handleModal} fullwidth>
                    Compose
                </Button>
            </StyledWrap>
            <ComposeMail show={show} onClose={handleModal} />
        </>
    );
};

export default ComposeBtn;
