import { FC } from "react";
import { Button } from "@doar/components";
import image from "@doar/shared/images/img21.png";
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
            <StyledTitle>503 Service Unavailable</StyledTitle>
            <StyledSubTitle>
                Oopps. The service is temporarily unavailable.
            </StyledSubTitle>
            <StyledDesc>
                The server is unable to service your request due to maintenance
                downtime or capacity problems.
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
