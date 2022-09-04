import { FC } from "react";
import { Users, Calendar, Briefcase, Globe, ShoppingBag } from "react-feather";
import WidgetTitle from "../widget-title-2";
import { StyledNav, StyledLink, StyledSpan } from "./style";

const Explore: FC = () => {
    return (
        <>
            <WidgetTitle>Explore</WidgetTitle>
            <StyledNav>
                <StyledLink path="#!">
                    <Users width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Groups</StyledSpan>
                </StyledLink>
                <StyledLink path="#!">
                    <Calendar width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Events</StyledSpan>
                </StyledLink>
                <StyledLink path="#!">
                    <Briefcase width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Jobs</StyledSpan>
                </StyledLink>
                <StyledLink path="#!">
                    <Globe width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Discover People</StyledSpan>
                </StyledLink>
                <StyledLink path="#!">
                    <ShoppingBag width={18} height={18} strokeWidth="2.3px" />
                    <StyledSpan>Buy &amp; Sell</StyledSpan>
                </StyledLink>
            </StyledNav>
        </>
    );
};

export default Explore;
