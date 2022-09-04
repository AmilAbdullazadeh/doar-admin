import { FC } from "react";
import { Search, UserPlus } from "react-feather";
import ReactTooltip from "react-tooltip";
import { Button } from "@doar/components";
import SearchForm from "../search-form";
import { StyledHeader } from "./style";

const SidebarHeader: FC = () => {
    return (
        <StyledHeader>
            <Search className="search" />
            <SearchForm />
            <Button size="xs" iconButton data-tip="Add New Contact">
                <UserPlus />
            </Button>
            <ReactTooltip place="bottom" effect="solid" />
        </StyledHeader>
    );
};

export default SidebarHeader;
