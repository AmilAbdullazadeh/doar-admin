import styled, {
    color as colorStyles,
    ColorProps,
    themeGet,
} from "@doar/shared/styled";
import { CardHeader } from "@doar/components";

export const StyledHeader = styled(({ ...props }) => <CardHeader {...props} />)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledList = styled.div`
    padding-left: 0;
    list-style: none;
    display: flex;
    margin-bottom: 0px;
`;

export const StyledListItem = styled.button`
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background: transparent;
    &.hidden {
        text-decoration: line-through;
    }
    &:not(:last-child) {
        margin-right: 0.5rem;
    }
    &:not(:first-child) {
        margin-left: 5px;
    }
`;

export const StyledBullet = styled.span<ColorProps>`
    display: block;
    border-radius: 0.25rem;
    height: 10px;
    margin-right: 5px;
    width: 10px;
    ${colorStyles};
`;

export const StyledListText = styled.span`
    font-size: 10px;
    text-transform: uppercase;
    font-family: ${themeGet("fonts.interUi")};
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledBodyTitle = styled.h4`
    letter-spacing: -0.5px;
    font-family: ${themeGet("fonts.rubik")};
    font-weight: 400;
    margin-bottom: 10px;
`;

export const StyledBodyStatus = styled(({ color, ...rest }) => (
    <small {...rest} />
))<ColorProps>`
    font-size: 11px;
    ${colorStyles};
`;

export const StyledBodyText = styled.p`
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 500;
    color: ${themeGet("colors.text3")};
`;

export const StyledChart = styled.div`
    position: relative;
    margin-left: -10px;
    height: 225px;
`;
