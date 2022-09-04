import { FC } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    SectionTitle,
    Text,
} from "@doar/components";
import {
    StyledTheadTR,
    StyledTH,
    StyledTR,
    StyledTD,
    StyledTable,
} from "./style";

const Cryptcurrencies: FC = () => {
    return (
        <Card>
            <CardHeader>
                <SectionTitle title="Cryptocurrencies" />
            </CardHeader>
            <CardBody p={["10px", "10px"]}>
                <StyledTable borderless mb="0">
                    <thead>
                        <StyledTheadTR>
                            <StyledTH>Asset</StyledTH>
                            <StyledTH textAlign="right">Last Price</StyledTH>
                            <StyledTH textAlign="right">% Change</StyledTH>
                        </StyledTheadTR>
                    </thead>
                    <tbody>
                        <StyledTR>
                            <td>
                                <strong>BCH</strong>
                            </td>
                            <StyledTD>$160.43</StyledTD>
                            <StyledTD>
                                <Text as="span" color="success">
                                    4.34% <i className="fa fa-arrow-up" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>ETH</strong>
                            </td>
                            <StyledTD>$136.99</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    0.77% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>DASH</strong>
                            </td>
                            <StyledTD>$90.53</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    0.80% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>BSV</strong>
                            </td>
                            <StyledTD>$66.34</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    1.61% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>LTC</strong>
                            </td>
                            <StyledTD>$58.91</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    2.17% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>ZEC</strong>
                            </td>
                            <StyledTD>$53.57</StyledTD>
                            <StyledTD>
                                <Text as="span" color="success">
                                    0.59% <i className="fa fa-arrow-up" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>XMR</strong>
                            </td>
                            <StyledTD>$52.36</StyledTD>
                            <StyledTD>
                                <Text as="span" color="success">
                                    0.42% <i className="fa fa-arrow-up" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>BTG</strong>
                            </td>
                            <StyledTD>$13.09</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    0.56% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>NEO</strong>
                            </td>
                            <StyledTD>$9.06</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    0.83% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                        <StyledTR>
                            <td>
                                <strong>ETC</strong>
                            </td>
                            <StyledTD>$4.37</StyledTD>
                            <StyledTD>
                                <Text as="span" color="danger">
                                    0.53% <i className="fa fa-arrow-down" />
                                </Text>
                            </StyledTD>
                        </StyledTR>
                    </tbody>
                </StyledTable>
            </CardBody>
        </Card>
    );
};

export default Cryptcurrencies;
