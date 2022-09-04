import { FC } from "react";
import { Button } from "@doar/components";
import image from "@doar/shared/images/img22.png";
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledSubTitle,
    StyledDesc,
    StyledBtnWrap,
    StyledNote,
} from "./style";

const ErrorContainer: FC = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={image} alt="500" />
            </StyledImg>
            <StyledTitle>505 Forbidden</StyledTitle>
            <StyledSubTitle>Oopps. Something is broken.</StyledSubTitle>
            <StyledDesc>
                We&apos;ve been automatically alerted of the issue and will work
                to fix it asap.
            </StyledDesc>
            <StyledBtnWrap>
                <Button path="/" color="white" px="30px" borderWidth="2px">
                    Back to Home
                </Button>
            </StyledBtnWrap>
            <StyledNote>
                Error page concept with laptop vector is created by{" "}
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

export default ErrorContainer;
