import { FC } from "react";
import Breadcrumb from "../breadcrumb";
import SearchForm from "../search-form";
import { StyledWrap } from "./style";

interface IProps {
    /**
     * Pass previous page's text and link
     */
    prev: Array<{
        text: string;
        link: string;
    }>;
    /**
     * Write page's title
     */
    title: string;
    /**
     * Write page's welcome text
     */
    wcText?: string;
}

const PageHeader: FC<IProps> = ({ prev, title, wcText }) => {
    return (
        <StyledWrap>
            <div>
                <Breadcrumb prev={prev} title={title} wcText={wcText} />
            </div>
            <SearchForm />
        </StyledWrap>
    );
};

export default PageHeader;
