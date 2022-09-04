import { FC } from "react";
import { Heading, Text } from "@doar/components";
import Label from "../label";
import { StyledWrap } from "./style";

interface IProps {
    label: string;
    heading: string;
    address: string;
    telephone: string;
    email: string;
}

const BilledBox: FC<IProps> = ({
    label,
    heading,
    address,
    telephone,
    email,
}) => {
    return (
        <StyledWrap>
            <Label>{label}</Label>
            <Heading fontSize="15px" mb="10px">
                {heading}
            </Heading>
            <Text mb={0}>{address}</Text>
            <Text mb={0}>Tell No: {telephone}</Text>
            <Text mb={0}>Email: {email}</Text>
        </StyledWrap>
    );
};

export default BilledBox;
