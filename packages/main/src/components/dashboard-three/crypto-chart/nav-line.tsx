import { FC } from "react";
import { StyledNavLine, StyledNavLink } from "./style";

const NavLine: FC = () => {
    return (
        <StyledNavLine>
            <StyledNavLink path="#!">Hour</StyledNavLink>
            <StyledNavLink path="#!" active>
                Day
            </StyledNavLink>
            <StyledNavLink path="#!">Week</StyledNavLink>
            <StyledNavLink path="#!">Month</StyledNavLink>
            <StyledNavLink path="#!">Year</StyledNavLink>
            <StyledNavLink path="#!">All</StyledNavLink>
        </StyledNavLine>
    );
};

export default NavLine;
