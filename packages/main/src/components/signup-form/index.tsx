import { FC } from "react";
import {
    Label,
    FormGroup,
    Input,
    Anchor,
    Button,
    Text,
} from "@doar/components";
import { useForm } from "react-hook-form";
import { hasKey } from "@doar/shared/methods";
import {
    StyledWrap,
    StyledTitle,
    StyledDesc,
    StyledDivider,
    StyledBottomText,
} from "./style";

interface IFormValues {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
}

const SigninForm: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: IFormValues) => {
        alert(JSON.stringify(data, null));
    };

    return (
        <StyledWrap>
            <StyledTitle>Create New Account</StyledTitle>
            <StyledDesc>
                It&apos;s free to signup and only takes a minute.
            </StyledDesc>
            <form action="#" onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="email">
                        Email address
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        feedbackText={errors?.email?.message}
                        state={hasKey(errors, "email") ? "error" : "success"}
                        showState={!!hasKey(errors, "email")}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        feedbackText={errors?.password?.message}
                        state={hasKey(errors, "password") ? "error" : "success"}
                        showState={!!hasKey(errors, "password")}
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum length is 6",
                            },
                            maxLength: {
                                value: 10,
                                message: "Minimum length is 10",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="first_name">
                        Firstname
                    </Label>
                    <Input
                        id="first_name"
                        type="text"
                        placeholder="Enter your firstname"
                        feedbackText={errors?.first_name?.message}
                        state={
                            hasKey(errors, "first_name") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "first_name")}
                        {...register("first_name", {
                            required: "First Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum length is 2",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Label display="block" mb="5px" htmlFor="last_name">
                        Lastname
                    </Label>
                    <Input
                        id="last_name"
                        type="text"
                        placeholder="Enter your Lastname"
                        feedbackText={errors?.last_name?.message}
                        state={
                            hasKey(errors, "last_name") ? "error" : "success"
                        }
                        showState={!!hasKey(errors, "last_name")}
                        {...register("last_name", {
                            required: "Last Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum length is 2",
                            },
                        })}
                    />
                </FormGroup>
                <FormGroup mb="20px">
                    <Text fontSize="12px">
                        By clicking <strong>Create an account</strong> below,
                        you agree to our terms of service and privacy statement.
                    </Text>
                </FormGroup>
                <Button type="submit" color="brand2" fullwidth>
                    Sign In
                </Button>
                <StyledDivider>or</StyledDivider>
                <Button variant="outlined" color="facebook" fullwidth>
                    Sign In With Facebook
                </Button>
                <Button
                    variant="outlined"
                    color="twitter"
                    mt="0.5rem"
                    fullwidth
                >
                    Sign In With Twitter
                </Button>
                <StyledBottomText>
                    Don&apos;t have an account?{" "}
                    <Anchor path="/signin">Sign In</Anchor>
                </StyledBottomText>
            </form>
        </StyledWrap>
    );
};

export default SigninForm;
