import styled, {
    themeGet,
    css,
    color as colorStyle,
    ColorProps,
} from "@doar/shared/styled";
import { CardHeader, ListGroupItem } from "@doar/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledNav = styled.nav`
    font-size: 11px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

interface ILink {
    $active?: boolean;
}

export const StyledNavLink = styled.a<ILink>`
    display: block;
    padding: 5px 0px 6px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: ${themeGet("colors.text3")};
    &:not(:first-of-type) {
        margin-left: 10px;
    }
    ${({ $active }) =>
        $active &&
        css`
            font-weight: 600;
            color: ${themeGet("colors.primary")};
        `}
`;

export const StyledChart = styled.div`
    width: 100%;
    height: 120px;
`;

export const StyledTopDiv = styled.div`
    margin-top: 20px;
    margin-left: 20px;
`;

export const StyledTopTitle = styled.p`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    margin-bottom: 0px;
`;

export const StyledTopFlex = styled.div`
    display: flex;
    align-items: baseline;
`;

export const StyledTopCoin = styled.h2`
    letter-spacing: -1px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 0px;
    small {
        color: ${themeGet("colors.text3")};
    }
`;

export const StyledTopRate = styled.span`
    font-family: ${themeGet("fonts.rubik")};
    color: ${themeGet("colors.success")};
    margin-left: 5px;
`;

export const StyledListItem = styled(({ ...rest }) => (
    <ListGroupItem {...rest} />
))`
    display: flex;
    align-items: center;
    background-color: transparent;
`;

StyledListItem.displayName = "ListGroupItem";

export const StyledIcon = styled(({ ...rest }) => (
    <div {...rest} />
))<ColorProps>`
    height: 35px;
    width: 35px;
    font-size: 16px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    ${colorStyle};
`;

export const StyledItemMiddle = styled.div`
    margin-left: 15px;
`;

export const StyledTitle = styled.h6`
    line-height: 1.5;
    margin-bottom: 0px;
`;

export const StyledSubtitle = styled.span`
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
    display: block;
`;

export const StyledItemEnd = styled.div`
    margin-left: auto;
    text-align: right;
`;

export const StyledCoin = styled.p`
    font-family: ${themeGet("fonts.rubik")};
    margin-bottom: 0px;
`;

export const StyledUsd = styled.span`
    font-size: 11px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.rubik")};
    color: ${themeGet("colors.text3")};
    display: block;
`;
