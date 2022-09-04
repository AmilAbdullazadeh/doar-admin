import { FC } from "react";
import { Search, X } from "react-feather";
import { Input } from "@doar/components";
import {
    StyledSearch,
    StyledSearchHeader,
    StyledSearchBtn,
    StyledSearchClose,
    StyledSearchBody,
    StyledSearchTitle,
    StyledNavList,
    StyledNavBtn,
    StyledNavDevider,
    StyledNavListItem,
} from "./style";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

const NavSearch: FC<IProps> = ({ isOpen, onClose }) => {
    return (
        <StyledSearch $isOpen={isOpen}>
            <StyledSearchHeader>
                <Input
                    type="search"
                    id="nav-search"
                    name="nav-search"
                    placeholder="Type and hit enter to search..."
                    customStyle="noborder"
                    fontSize={["14px", null, null, "16px"]}
                />
                <StyledSearchBtn variant="texted" color="light">
                    <Search />
                </StyledSearchBtn>
                <StyledSearchClose variant="texted" onClick={onClose}>
                    <X />
                </StyledSearchClose>
            </StyledSearchHeader>
            <StyledSearchBody>
                <StyledSearchTitle>Recent Searches</StyledSearchTitle>
                <StyledNavList>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">modern dashboard</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">calendar app</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">modal examples</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">avatar</StyledNavBtn>
                    </StyledNavListItem>
                </StyledNavList>
                <StyledNavDevider />
                <StyledSearchTitle>Search Suggestions</StyledSearchTitle>
                <StyledNavList>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">cryptocurrency</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">button groups</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">form elements</StyledNavBtn>
                    </StyledNavListItem>
                    <StyledNavListItem>
                        <StyledNavBtn href="#">contact app</StyledNavBtn>
                    </StyledNavListItem>
                </StyledNavList>
            </StyledSearchBody>
        </StyledSearch>
    );
};

export default NavSearch;
