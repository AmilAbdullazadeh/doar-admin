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
                        Name
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Images
                    </StyledTH>
                    <StyledTH width="40%" display={["none", "table-cell"]}>
                        Videos
                    </StyledTH>
                    <StyledTH textAlign="right">Action</StyledTH>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <StyledTD>1</StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Category Name
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Image 1, Image 2, Image 3
                    </StyledTD>
                    <StyledTD color="text3" display={["none", "table-cell"]}>
                        Video
                    </StyledTD>
                    <StyledTD textAlign="right">Edit/Delete</StyledTD>
                </tr>
            </tbody>
        </Table>
    );
};

export default RowTwo;
