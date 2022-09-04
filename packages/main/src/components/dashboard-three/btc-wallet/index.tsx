import { FC } from "react";
import { MoreHorizontal } from "react-feather";
import {
    Card,
    SectionTitle,
    CardBody,
    ListGroup,
    Text,
} from "@doar/components";
import {
    StyledHeader,
    StyledHeaderText,
    StyledText,
    StyledH3,
    StyledDiv,
    StyledDivText,
    StyledDivSpan,
    StyledBtnWrap,
    StyledBtn,
    StyledDivTwo,
    StyledLink,
    StyledListIitem,
} from "./style";

const BTCWallet: FC = () => {
    return (
        <Card height={[null, null, "100%"]}>
            <StyledHeader>
                <SectionTitle title="BTC Wallet" />
                <StyledHeaderText>
                    <MoreHorizontal width="20px" height="20px" />
                </StyledHeaderText>
            </StyledHeader>
            <CardBody px={["20px", "20px"]} pb={["10px", "10px"]}>
                <StyledText mb="5px">Available Balance</StyledText>
                <StyledH3>
                    26.00453100 <small>BTC</small>
                </StyledH3>
                <StyledDiv>
                    <StyledDivText>
                        <StyledDivSpan color="success">USD</StyledDivSpan>{" "}
                        $103,342.50
                    </StyledDivText>
                    <StyledDivText>
                        <StyledDivSpan color="primary">EUR</StyledDivSpan>{" "}
                        $91,105.00
                    </StyledDivText>
                </StyledDiv>
                <StyledBtnWrap>
                    <StyledBtn color="white">Send</StyledBtn>
                    <StyledBtn color="primary" ml="10px">
                        Receive
                    </StyledBtn>
                </StyledBtnWrap>
                <StyledDivTwo>
                    <StyledText mb="0">Recent Transactions</StyledText>
                    <StyledLink href="#!">Show All</StyledLink>
                </StyledDivTwo>
                <ListGroup flush>
                    <StyledListIitem>
                        <Text as="span" fontWeight="500">
                            Received Bitcoin
                        </Text>
                        <Text as="span" fontFamily="rubik">
                            +0.00003998 BTC
                        </Text>
                    </StyledListIitem>
                    <StyledListIitem>
                        <Text as="span" fontWeight="500">
                            Sent Bitcoin
                        </Text>
                        <Text as="span" fontFamily="rubik">
                            -0.01570525 BTC
                        </Text>
                    </StyledListIitem>
                    <StyledListIitem>
                        <Text as="span" fontWeight="500">
                            Bought Ethereum
                        </Text>
                        <Text as="span" fontFamily="rubik">
                            +2.0157 ETH
                        </Text>
                    </StyledListIitem>
                    <StyledListIitem>
                        <Text as="span" fontWeight="500">
                            Bought Bitcoin
                        </Text>
                        <Text as="span" fontFamily="rubik">
                            +0.000033420 BTC
                        </Text>
                    </StyledListIitem>
                    <StyledListIitem>
                        <Text as="span" fontWeight="500">
                            Sent Bitcoin
                        </Text>
                        <Text as="span" fontFamily="rubik">
                            -0.01570525 BTC
                        </Text>
                    </StyledListIitem>
                </ListGroup>
            </CardBody>
        </Card>
    );
};

export default BTCWallet;
