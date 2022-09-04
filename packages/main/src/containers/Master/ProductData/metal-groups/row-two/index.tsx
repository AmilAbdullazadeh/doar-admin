import { FC } from "react";
import { Table } from "@doar/components";
import { StyledTH, StyledTD } from "./style";

const RowTwo: FC = () => {
    return (
        <Table mt="40px" borderBottomWidth={1} theadColor="primary">
            <thead>
                <tr>
                    <StyledTH width="20%">ID</StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Metal
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Metal Group Name
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Karatage / Fineness
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        ShortName
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        ReferenceID
                    </StyledTH>
                    <StyledTH textAlign="right">Action</StyledTH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <StyledTD>1</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Gold
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        24 KT Gold
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        999.9
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        24 KT
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        1
                    </StyledTD>
                    <StyledTD textAlign="right">Edit/Delete</StyledTD>
                </tr>
            </tbody>
        </Table>
    );
};

export default RowTwo;
