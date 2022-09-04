import { FC } from "react";
import { Phone, Info, Flag, Star } from "react-feather";
import ReactTooltip from "react-tooltip";
import { StyledNav, StyledLink } from "./style";

const DirectNav: FC = () => {
    return (
        <StyledNav>
            <StyledLink
                path="#!"
                data-for="tooltip-phone"
                data-tip="Phone Calls"
            >
                <Phone />
            </StyledLink>
            <ReactTooltip place="left" effect="solid" id="tooltip-phone" />
            <StyledLink
                path="#!"
                data-for="tooltip-details"
                data-tip="User details"
            >
                <Info />
            </StyledLink>
            <ReactTooltip place="left" effect="solid" id="tooltip-details" />
            <StyledLink
                path="#!"
                data-for="tooltip-fav"
                data-tip="Add to favourites"
            >
                <Star />
            </StyledLink>
            <ReactTooltip place="left" effect="solid" id="tooltip-fav" />
            <StyledLink path="#!" data-for="tooltip-flag" data-tip="Flag User">
                <Flag />
            </StyledLink>
            <ReactTooltip place="left" effect="solid" id="tooltip-flag" />
        </StyledNav>
    );
};

export default DirectNav;
