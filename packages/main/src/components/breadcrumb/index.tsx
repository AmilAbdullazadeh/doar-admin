import React from "react";
import { StyledBreadItem, StyledBreadWrap, PageHeading } from "./style";

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

const Breadcrumb: React.FC<IProps> = ({ prev, title, wcText }) => {
    return (
        <>
            <StyledBreadWrap>
                {prev.map((item) => (
                    <StyledBreadItem key={item.text} path={item.link}>
                        {item.text}
                    </StyledBreadItem>
                ))}
                <StyledBreadItem active>{title}</StyledBreadItem>
            </StyledBreadWrap>
            {wcText && <PageHeading>{wcText}</PageHeading>}
        </>
    );
};

export default Breadcrumb;
