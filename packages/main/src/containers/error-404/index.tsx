import { FC } from "react";
import { Button, Input } from "@doar/components";
import image from "@doar/shared/images/img19.png";
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledSubTitle,
    StyledDesc,
    StyledResetForm,
    StyledNote,
} from "./style";

const ErrorContainer: FC = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={image} alt="404" />
            </StyledImg>
            <StyledTitle>404 Page Not Found</StyledTitle>
            <StyledSubTitle>
                Oopps. The page you were looking for doesn&apos;t exist.
            </StyledSubTitle>
            <StyledDesc>
                You may have mistyped the address or the page may have moved.
                Try searching below.
            </StyledDesc>
            <StyledResetForm>
                <Input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Search"
                    width={["200px", "250px"]}
                />
                <Button
                    type="submit"
                    color="brand2"
                    px={[null, "25px"]}
                    ml="5px"
                >
                    Search
                </Button>
            </StyledResetForm>
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
