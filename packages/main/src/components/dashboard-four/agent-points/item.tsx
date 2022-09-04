import { FC } from "react";
import {
    Media,
    MediaBody,
    Avatar,
    AvatarInitial,
    Progress,
} from "@doar/components";
import { formatNumber } from "@doar/shared/methods";
import {
    StyledDiv,
    StyledTitle,
    StyledRole,
    StyledDivLeft,
    StyledDivRight,
} from "./style";

interface IProps {
    image?: string;
    bg?: string;
    name: string;
    designation: string;
    points: number;
    mt?: string;
}

const Item: FC<IProps> = ({ image, bg, name, designation, points, mt }) => {
    const totalPoints = 14484;
    const percantage = Math.round((points / totalPoints) * 100);
    let level;
    let color;
    if (percantage >= 80) {
        level = "executive";
        color = "primary";
    } else if (percantage >= 60) {
        level = "master";
        color = "success";
    } else if (percantage >= 50) {
        level = "super elite";
        color = "indigo";
    } else if (percantage >= 40) {
        level = "elite";
        color = "pink";
    }

    return (
        <Media mt={mt}>
            <Avatar>
                {image && <img src={image} alt={name} />}
                {!image && (
                    <AvatarInitial bg={bg}>
                        {name.substring(0, 1)}
                    </AvatarInitial>
                )}
            </Avatar>
            <MediaBody ml="15px">
                <StyledTitle>{name}</StyledTitle>
                <StyledRole>{designation}</StyledRole>
                <Progress
                    now={percantage}
                    bg={color}
                    height="4px"
                    opacity={0.7}
                    mb="4px"
                />
                <StyledDiv>
                    <StyledDivLeft>{level} Level</StyledDivLeft>
                    <StyledDivRight>
                        {formatNumber(points)} points
                    </StyledDivRight>
                </StyledDiv>
            </MediaBody>
        </Media>
    );
};

export default Item;
