import { FC } from "react";
import { ExternalLink } from "react-feather";
import {
    Card,
    CardBody,
    Progress,
    SectionTitle,
    DropdownToggle,
    DropdownMenu,
} from "@doar/components";
import {
    StyledHeader,
    StyledDropdown,
    StyledTable,
    StyledHeadTR,
    StyledTH,
    StyledTD,
    StyledProgressWrap,
} from "./style";

const TotalVisits: FC = () => {
    return (
        <Card>
            <StyledHeader>
                <SectionTitle
                    title="Total Visits"
                    titleProps={{ lineHeight: 1.5 }}
                />
                <StyledDropdown>
                    <DropdownToggle variant="texted">
                        Mar 01 - Mar 20, 2019{" "}
                        <i className="fa fa-chevron-down" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <button type="button" className="item">
                            Mar 01 - Mar 20, 2019
                        </button>
                        <button type="button" className="item">
                            Mar 02 - Mar 20, 2019
                        </button>
                        <button type="button" className="item">
                            Mar 03 - Mar 20, 2019
                        </button>
                        <button type="button" className="item">
                            Mar 04 - Mar 20, 2019
                        </button>
                        <button type="button" className="item">
                            Mar 05 - Mar 20, 2019
                        </button>
                    </DropdownMenu>
                </StyledDropdown>
            </StyledHeader>
            <CardBody py={["15px", "15px"]} px={["10px", "10px"]}>
                <StyledTable borderless compact mb="0px">
                    <thead>
                        <StyledHeadTR>
                            <StyledTH width="5%">Link</StyledTH>
                            <StyledTH>Page Title</StyledTH>
                            <StyledTH textAlign="right">
                                Percentage (%)
                            </StyledTH>
                            <StyledTH textAlign="right">Value</StyledTH>
                        </StyledHeadTR>
                    </thead>
                    <tbody>
                        <tr>
                            <StyledTD textAlign="center">
                                <a href="#!" aria-label="External Link">
                                    <ExternalLink size={12} strokeWidth="3px" />
                                </a>
                            </StyledTD>
                            <StyledTD fontWeight={500}>Homepage</StyledTD>
                            <StyledTD textAlign="right">
                                <StyledProgressWrap>
                                    <Progress
                                        height="4px"
                                        now={65.35}
                                        bg="teal"
                                    />
                                </StyledProgressWrap>
                            </StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                65.35%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <a href="#!" aria-label="External Link">
                                    <ExternalLink size={12} strokeWidth="3px" />
                                </a>
                            </StyledTD>
                            <StyledTD fontWeight={500}>Our Services</StyledTD>
                            <StyledTD textAlign="right">
                                <StyledProgressWrap>
                                    <Progress
                                        height="4px"
                                        now={84.97}
                                        bg="primary"
                                    />
                                </StyledProgressWrap>
                            </StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                84.97%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <a href="#!" aria-label="External Link">
                                    <ExternalLink size={12} strokeWidth="3px" />
                                </a>
                            </StyledTD>
                            <StyledTD fontWeight={500}>
                                List of Products
                            </StyledTD>
                            <StyledTD textAlign="right">
                                <StyledProgressWrap>
                                    <Progress
                                        height="4px"
                                        now={38.66}
                                        bg="warning"
                                    />
                                </StyledProgressWrap>
                            </StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                38.66%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <a href="#!" aria-label="External Link">
                                    <ExternalLink size={12} strokeWidth="3px" />
                                </a>
                            </StyledTD>
                            <StyledTD fontWeight={500}>Contact Us</StyledTD>
                            <StyledTD textAlign="right">
                                <StyledProgressWrap>
                                    <Progress
                                        height="4px"
                                        now={16.11}
                                        bg="danger"
                                    />
                                </StyledProgressWrap>
                            </StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                16.11%
                            </StyledTD>
                        </tr>
                        <tr>
                            <StyledTD textAlign="center">
                                <a href="#!" aria-label="External Link">
                                    <ExternalLink size={12} strokeWidth="3px" />
                                </a>
                            </StyledTD>
                            <StyledTD fontWeight={500}>
                                Product 50% Sale
                            </StyledTD>
                            <StyledTD textAlign="right">
                                <StyledProgressWrap>
                                    <Progress
                                        height="4px"
                                        now={59.34}
                                        bg="teal"
                                    />
                                </StyledProgressWrap>
                            </StyledTD>
                            <StyledTD fontWeight={500} textAlign="right">
                                59.34%
                            </StyledTD>
                        </tr>
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default TotalVisits;
