import { FC } from "react";
import { CardImage, Anchor, Text, Button } from "@doar/components";
import {
    StyledCard,
    StyledCardBody,
    StyledName,
    StyledCardFooter,
} from "./style";

interface IProps {
    image: string;
    title: string;
    date: string;
    place: string;
    location: string;
    people: string;
    path: string;
}

const EventCard: FC<IProps> = ({
    image,
    title,
    date,
    place,
    location,
    people,
    path,
}) => {
    return (
        <StyledCard>
            <CardImage src={image} alt="card" isTop />
            <StyledCardBody>
                <StyledName>
                    <Anchor path={path} variant="link2">
                        {title}
                    </Anchor>
                </StyledName>
                <Text mb={0} color="text3">
                    {date}, {place}
                </Text>
                <Text as="span" color="text3">
                    {location}
                </Text>
            </StyledCardBody>
            <StyledCardFooter>
                <Text as="span" color="text3">
                    {people} people interested
                </Text>
                <Button size="xs" color="secondary">
                    Interested
                </Button>
            </StyledCardFooter>
        </StyledCard>
    );
};

export default EventCard;
