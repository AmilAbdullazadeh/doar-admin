import { FC } from "react";
import { Button } from "@doar/components";
import image from "@doar/shared/images/img17.png";
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledDesc,
    StyledBtnWrap,
    StyledNote,
} from "./style";

const VerifyContainer: FC = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={image} alt="verify" />
            </StyledImg>
            <StyledTitle>Verify your email address</StyledTitle>
            <StyledDesc>
                Please check your email and click the verify button or link to
                verify your account.
            </StyledDesc>
            <StyledBtnWrap>
                <Button path="/" color="brand2">
                    Resend Verification
                </Button>
                <Button path="/" color="white" ml="5px">
                    Contact Support
                </Button>
            </StyledBtnWrap>
            <StyledNote>
                Mailbox with envelope vector is created by{" "}
                <a
                    href="https://www.freepik.com/free-photos-vectors/background"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    freepik (freepik.com)
                </a>
            </StyledNote>
        </StyledWrap>
    );
};

export default VerifyContainer;
