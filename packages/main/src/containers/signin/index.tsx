import { FC } from "react";
import loginImage from "@doar/shared/images/img15.png";
import SigninForm from "../../components/signin-form";
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
            <StyledSignin>
                <SigninForm />
            </StyledSignin>
        </StyledMedia>
    );
};

export default AuthContainer;
