import { FC } from "react";
import { Search } from "react-feather";
import { HRLine } from "@doar/components";
import ScrollBar from "../../../../components/scrollbar";
import SearchForm from "../../../../components/apps/file-manager/search-form";
import Toolbar from "../../../../components/apps/file-manager/toolbar";
import { useAppSelector } from "../../../../redux/hooks";
import RowOne from "../row-one";
import RowTwo from "../row-two";
import RowThree from "../row-three";
import {
    StyledMain,
    StyledHeader,
    StyledBody,
    StyledBodyInner,
    StyledHeading,
} from "./style";

const Wrapper: FC = () => {
    const { sidebar } = useAppSelector((state) => state.ui);
    return (
        <StyledMain $showSidebar={sidebar}>
            <StyledHeader>
                <Search className="search" />
                <SearchForm />
                <Toolbar />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <StyledBodyInner>
                        <StyledHeading>All Files</StyledHeading>
                        <RowOne />
                        <HRLine my="40px" borderWidth="0px" />
                        <RowTwo />
                        <HRLine my="40px" borderWidth="0px" />
                        <RowThree />
                    </StyledBodyInner>
                </StyledBody>
            </ScrollBar>
        </StyledMain>
    );
};

export default Wrapper;
