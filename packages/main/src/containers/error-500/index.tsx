import { FC } from "react";
import { Button } from "@doar/components";
import image from "@doar/shared/images/img20.png";
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
            <StyledTitle>500 Internal Server Error</StyledTitle>
            <StyledSubTitle>
                Oopps. There was an error, please try again later.
            </StyledSubTitle>
            <StyledDesc>
                The server encountered an internal server error and was unable
                to complete your request.
            </StyledDesc>
            <StyledBtnWrap>
                <Button path="/" color="white" px="30px">
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
