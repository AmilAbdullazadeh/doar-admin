import { FC } from "react";
import { Table } from "@doar/components";
import { StyledTH, StyledTD } from "./style";

const RowTwo: FC = () => {
    return (
        <Table mt="40px" borderBottomWidth={1}>
            <thead>
                <tr>
                    <StyledTH width="20%">Type</StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Description
                    </StyledTH>
                    <StyledTH textAlign="center">QNTY</StyledTH>
                    <StyledTH textAlign="right">Unit Price</StyledTH>
                    <StyledTH textAlign="right">Amount</StyledTH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <StyledTD>Website Design</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam...
                    </StyledTD>
                    <StyledTD textAlign="center">2</StyledTD>
                    <StyledTD textAlign="right">$150.00</StyledTD>
                    <StyledTD textAlign="right">$300.00</StyledTD>
                </tr>
                <tr>
                    <StyledTD>Firefox Plugin</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                        atque...
                    </StyledTD>
                    <StyledTD textAlign="center">1</StyledTD>
                    <StyledTD textAlign="right">$1,200.00</StyledTD>
                    <StyledTD textAlign="right">$1,200.00</StyledTD>
                </tr>
                <tr>
                    <StyledTD>iPhone App</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Et harum quidem rerum facilis est et expedita distinctio
                    </StyledTD>
                    <StyledTD textAlign="center">2</StyledTD>
                    <StyledTD textAlign="right">$850.00</StyledTD>
                    <StyledTD textAlign="right">$1,700.00</StyledTD>
                </tr>
                <tr>
                    <StyledTD>Android App</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, sed quia non
                        numquam eius modi tempora incidunt ut
                    </StyledTD>
                    <StyledTD textAlign="center">3</StyledTD>
                    <StyledTD textAlign="right">$850.00</StyledTD>
                    <StyledTD textAlign="right">$2,550.00</StyledTD>
                </tr>
            </tbody>
        </Table>
    );
};

export default RowTwo;
