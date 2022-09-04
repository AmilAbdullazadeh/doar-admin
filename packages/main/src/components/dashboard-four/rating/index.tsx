import { FC } from "react";
import {
    Card,
    CardBody,
    SectionTitle,
    Text,
    ListGroup,
} from "@doar/components";
import {
    StyledHeader,
    StyledTotalWrap,
    StyledTotal,
    StyledTotalStars,
    StyledStar,
    StyledListItem,
    StyledRateText,
    StyledStars,
    StyledRateCount,
    StyledRatePer,
} from "./style";

const Rating: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Overall Rating" />
                <Text fontSize="12px" color="text3" mt="5px">
                    Measures the quality or your support team’s efforts.
                </Text>
            </StyledHeader>
            <CardBody p={[0, 0]}>
                <StyledTotalWrap>
                    <StyledTotal>4.2</StyledTotal>
                    <StyledTotalStars>
                        <StyledStar className="fa fa-star" $status="full" />
                        <StyledStar className="fa fa-star" $status="full" />
                        <StyledStar className="fa fa-star" $status="full" />
                        <StyledStar className="fa fa-star" $status="full" />
                        <StyledStar className="fa fa-star" $status="empty" />
                    </StyledTotalStars>
                </StyledTotalWrap>
                <ListGroup flush>
                    <StyledListItem>
                        <StyledRateText>5.0</StyledRateText>
                        <StyledStars>
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                        </StyledStars>
                        <StyledRateCount>4,230</StyledRateCount>
                        <StyledRatePer>58%</StyledRatePer>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledRateText>4.0</StyledRateText>
                        <StyledStars>
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                        </StyledStars>
                        <StyledRateCount>1,416</StyledRateCount>
                        <StyledRatePer>24%</StyledRatePer>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledRateText>3.0</StyledRateText>
                        <StyledStars>
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                        </StyledStars>
                        <StyledRateCount>980</StyledRateCount>
                        <StyledRatePer>16%</StyledRatePer>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledRateText>2.0</StyledRateText>
                        <StyledStars>
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                        </StyledStars>
                        <StyledRateCount>401</StyledRateCount>
                        <StyledRatePer>8%</StyledRatePer>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledRateText>1.0</StyledRateText>
                        <StyledStars>
                            <StyledStar className="fa fa-star" $status="full" />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                            <StyledStar
                                className="fa fa-star"
                                $status="empty"
                            />
                        </StyledStars>
                        <StyledRateCount>798</StyledRateCount>
                        <StyledRatePer>12%</StyledRatePer>
                    </StyledListItem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

export default Rating;
