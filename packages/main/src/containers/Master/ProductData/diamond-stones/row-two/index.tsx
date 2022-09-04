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
                        Metal Name
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
                    <StyledTD textAlign="right">Edit/Delete</StyledTD>
                </tr>
            </tbody>
        </Table>
    );
};

export default RowTwo;
