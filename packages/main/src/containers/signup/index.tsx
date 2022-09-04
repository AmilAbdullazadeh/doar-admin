import { FC } from "react";
import loginImage from "@doar/shared/images/img16.png";
import SignupForm from "../../components/signup-form";
import {
    StyledMedia,
    StyledMediaBody,
    StyledImage,
    StyledImgText,
    StyledSignin,
} from "./style";

const AuthContainer: FC = () => {
    return (
        <StyledMedia>
            <StyledSignin>
                <SignupForm />
            </StyledSignin>
            <StyledMediaBody>
                <StyledImage>
                    <img src={loginImage} alt="Login" />
                </StyledImage>
                <StyledImgText>
                    Workspace design vector is created by{" "}
                    <a
                        href="https://www.freepik.com/pikisuperstar"
                        target="_blank"
                        rel="noreferrer"
                    >
                        pikisuperstar (freepik.com)
                    </a>
                </StyledImgText>
            </StyledMediaBody>
        </StyledMedia>
    );
};

export default AuthContainer;
