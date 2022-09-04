import { FC } from "react";
import { Clock, Paperclip, Share, PlusCircle, Settings } from "react-feather";
import { Card, CardBody, SectionTitle, Text, Anchor } from "@doar/components";
import {
    StyledHeader,
    StyledList,
    StyledListItem,
    StyledIcon,
    StyledBody,
    StyledDate,
} from "./style";

const RecentActivities: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle title="Recent Activities" />
                <Text fontSize="12px" color="text3">
                    Last activity: 2 hours ago
                </Text>
            </StyledHeader>
            <CardBody p={["20px", "20px"]}>
                <StyledList>
                    <StyledListItem>
                        <StyledIcon $color="primary">
                            <Clock width={20} height={20} />
                        </StyledIcon>
                        <StyledBody>
                            <Text mb="2px">
                                <strong>Louise</strong> added a time entry to
                                the ticket{" "}
                                <Anchor path="#!" color="text2">
                                    <strong>Sales Revenue</strong>
                                </Anchor>
                            </Text>
                            <StyledDate>2 hours ago</StyledDate>
                        </StyledBody>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledIcon $color="success">
                            <Paperclip width={20} height={20} />
                        </StyledIcon>
                        <StyledBody>
                            <Text mb="2px">
                                <strong>Kevin</strong> added new attachment to
                                the ticket{" "}
                                <Anchor path="#!" color="text2">
                                    <strong>Software Bug Reporting</strong>
                                </Anchor>
                            </Text>
                            <StyledDate>5 hours ago</StyledDate>
                        </StyledBody>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledIcon $color="orange">
                            <Share width={20} height={20} />
                        </StyledIcon>
                        <StyledBody>
                            <Text mb="2px">
                                <strong>Natalie</strong> reassigned ticket{" "}
                                <Anchor path="#!" color="text2">
                                    <strong>Problem installing software</strong>
                                </Anchor>
                                to <strong>Katherine</strong>
                            </Text>
                            <StyledDate>8 hours ago</StyledDate>
                        </StyledBody>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledIcon $color="pink">
                            <PlusCircle width={20} height={20} />
                        </StyledIcon>
                        <StyledBody>
                            <Text mb="2px">
                                <strong>Katherine</strong> submitted new ticket{" "}
                                <Anchor path="#!" color="text2">
                                    <strong>Payment Method</strong>
                                </Anchor>
                            </Text>
                            <StyledDate>Yesterday</StyledDate>
                        </StyledBody>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledIcon $color="indigo">
                            <Settings width={20} height={20} />
                        </StyledIcon>
                        <StyledBody>
                            <Text mb="2px">
                                <strong>Katherine</strong> changed settings to
                                ticket category{" "}
                                <Anchor path="#!" color="text2">
                                    <strong>Payment &amp; Invoice</strong>
                                </Anchor>
                            </Text>
                            <StyledDate>2 days ago</StyledDate>
                        </StyledBody>
                    </StyledListItem>
                </StyledList>
            </CardBody>
        </Card>
    );
};

export default RecentActivities;
