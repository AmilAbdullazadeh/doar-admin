import { FC } from "react";
import { Printer, Mail, CreditCard } from "react-feather";
import { Heading, Text, Button } from "@doar/components";
import { StyledWrap, StyledBtnWrap } from "./style";

const PageHeader: FC = () => {
    return (
        <StyledWrap>
            <div>
                <Heading as="h4" mb="5px">
                    Invoice #DF032AZ00022
                </Heading>
                <Text color="text3">Due on April 21, 2019</Text>
            </div>
            <StyledBtnWrap>
                <Button color="white" iconSize="sm">
                    <Printer /> Print
                </Button>
                <Button color="white" iconSize="sm" ml="10px">
                    <Mail /> Email
                </Button>
                <Button iconSize="sm" ml="10px">
                    <CreditCard /> Pay
                </Button>
            </StyledBtnWrap>
        </StyledWrap>
    );
};

export default PageHeader;
