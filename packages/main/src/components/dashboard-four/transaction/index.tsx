import { FC } from "react";
import {
    Card,
    ListGroup,
    ListGroupItem,
    Avatar,
    AvatarInitial,
} from "@doar/components";
import {
    StyledHeader,
    StyledTitle,
    StyledHeaderRight,
    StyledIcon,
    StyledListMiddle,
    StyledListTitle,
    StyledListText,
    StyledListEnd,
    StyledListTrans,
    StyledListStatus,
    StyledFooter,
    StyledFooterLink,
} from "./style";

const Transaction: FC = () => {
    return (
        <Card height="100%">
            <StyledHeader>
                <StyledTitle>Transaction History</StyledTitle>
                <StyledHeaderRight>
                    <StyledIcon href="#" aria-label="refesh">
                        <i className="fa fa-redo" />
                    </StyledIcon>
                    <StyledIcon href="#" ml="10px" aria-label="more options">
                        <i className="fa fa-ellipsis-v" />
                    </StyledIcon>
                </StyledHeaderRight>
            </StyledHeader>
            <ListGroup flush>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="indigo" opacity="0.5">
                            <i className="fa fa-exchange-alt" />
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>
                            Process refund to #00910
                        </StyledListTitle>
                        <StyledListText>Mar 21, 2019, 1:00pm</StyledListText>
                    </StyledListMiddle>
                    <StyledListEnd>
                        <StyledListTrans>-$16.50</StyledListTrans>
                        <StyledListStatus $status="complete">
                            Completed
                        </StyledListStatus>
                    </StyledListEnd>
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="orange" opacity="0.5">
                            <i className="fa fa-bus-alt" />
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>
                            Process delivery to #44333
                        </StyledListTitle>
                        <StyledListText>Mar 20, 2019, 11:40am</StyledListText>
                    </StyledListMiddle>
                    <StyledListEnd>
                        <StyledListTrans>3 Items</StyledListTrans>
                        <StyledListStatus $status="pickup">
                            For pickup
                        </StyledListStatus>
                    </StyledListEnd>
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="teal">
                            <i className="fa fa-check" />
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>Payment from #10322</StyledListTitle>
                        <StyledListText>Mar 21, 2019, 3:30pm</StyledListText>
                    </StyledListMiddle>
                    <StyledListEnd>
                        <StyledListTrans>+ $129.50</StyledListTrans>
                        <StyledListStatus $status="complete">
                            Completed
                        </StyledListStatus>
                    </StyledListEnd>
                </ListGroupItem>
                <ListGroupItem display="flex" px={[null, "20px"]}>
                    <Avatar display={["none", "block"]}>
                        <AvatarInitial bg="orange" opacity="0.5">
                            <i className="fa fa-times" />
                        </AvatarInitial>
                    </Avatar>
                    <StyledListMiddle>
                        <StyledListTitle>
                            Payment failed from #087651
                        </StyledListTitle>
                        <StyledListText>Mar 19, 2019, 12:54pm</StyledListText>
                    </StyledListMiddle>
                    <StyledListEnd>
                        <StyledListTrans>$150.00</StyledListTrans>
                        <StyledListStatus $status="cancel">
                            Declined
                        </StyledListStatus>
                    </StyledListEnd>
                </ListGroupItem>
            </ListGroup>
            <StyledFooter>
                <StyledFooterLink href="/invoice">
                    View All Transactions{" "}
                    <i className="icon ion-md-arrow-down mg-l-5" />
                </StyledFooterLink>
            </StyledFooter>
        </Card>
    );
};

export default Transaction;
