import { FC } from "react";
import { Button, Input } from "@doar/components";
import image from "@doar/shared/images/img18.png";
import {
    StyledWrap,
    StyledImg,
    StyledTitle,
    StyledDesc,
    StyledResetForm,
    StyledNote,
} from "./style";

const PasswordContainer: FC = () => {
    return (
        <StyledWrap>
            <StyledImg>
                <img src={image} alt="forgot password" />
            </StyledImg>
            <StyledTitle>Reset your password</StyledTitle>
            <StyledDesc>
                Enter your username or email address and we will send you a link
                to reset your password.
            </StyledDesc>
            <StyledResetForm>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter username or email address"
                    width={[null, "250px"]}
                />
                <Button
                    type="submit"
                    color="brand2"
                    mt={["10px", 0]}
                    ml={[0, "10px"]}
                >
                    Reset Password
                </Button>
            </StyledResetForm>
            <StyledNote>
                Key business concept vector is created by{" "}
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

export default PasswordContainer;
