import { FC } from "react";

import { Plus } from "react-feather";

import { Heading, Button } from "@doar/components";

import { StyledWrap, StyledBtnWrap } from "./style";

const PageHeader: FC = () => {
    return (
        <StyledWrap>
            <div>
                <Heading as="h4" mb="5px">
                    Define Metal Groups
                </Heading>
            </div>
            <StyledBtnWrap>
                <Button iconSize="sm">
                    <Plus /> Add Metal Group
                </Button>
            </StyledBtnWrap>
        </StyledWrap>
    );
};

export default PageHeader;
