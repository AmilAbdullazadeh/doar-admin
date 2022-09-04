import { FC } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    SectionTitle,
} from "@doar/components";
import {
    StyledNumber,
    StyledSubtitle,
    StyledDesc,
    StyledButton,
} from "./style";

const TrafficSource: FC = () => {
    return (
        <Card>
            <CardHeader>
                <SectionTitle title="Top Traffic Source" />
            </CardHeader>
            <CardBody textAlign="center">
                <StyledNumber>29,931</StyledNumber>
                <StyledSubtitle>Organic Search</StyledSubtitle>
                <StyledDesc>
                    Measures your user&apos;s sources that generate traffic
                    metrics to your website for this month.
                </StyledDesc>
            </CardBody>
            <CardFooter borderTopWidth={0} pt="0px">
                <StyledButton size="sm" variant="outlined" fullwidth>
                    Learn More
                </StyledButton>
            </CardFooter>
        </Card>
    );
};

export default TrafficSource;
