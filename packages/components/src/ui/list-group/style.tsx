import styled, {
    themeGet,
    css,
    space,
    SpaceProps,
    flexbox,
    FlexboxProps,
    LayoutProps,
    layout,
} from "@doar/shared/styled";
import tinycolor2 from "tinycolor2";

interface IListGroup extends SpaceProps {
    $horizontal?: boolean;
}

export const StyledListGroup = styled(
    ({ p, px, py, pl, pr, pt, pb, m, mx, my, ml, mr, mt, mb, ...rest }) => (
        <ul {...rest} />
    )
)<IListGroup>`
    display: flex;
    ${space}
    ${({ $horizontal }) =>
        ($horizontal !== true || !$horizontal) &&
        css`
            flex-direction: column;
        `}
    ${({ $horizontal }) =>
        $horizontal === true &&
        css`
            flex-direction: row;
        `}
`;

interface IListGroupItem extends SpaceProps, FlexboxProps, LayoutProps {
    $active?: boolean;
    $disabled?: boolean;
    $action?: boolean;
    $flush?: boolean;
    $horizontal?: boolean;
}

export const StyledListGroupItem = styled(
    ({ display, p, px, py, pl, pr, pt, pb, ...rest }) => <li {...rest} />
)<IListGroupItem>`
    padding: 10px 15px;
    position: relative;
    display: block;
    background-color: transparent;
    border: 1px solid ${themeGet("colors.light")};
    &:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }
    &:not(:first-child) {
        border-top-width: 0;
    }
    &:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    ${({ $active }) =>
        $active === true &&
        css`
            margin-top: -1px;
            border-top-width: 1px;
            z-index: 2;
            color: #fff;
            background-color: ${themeGet("colors.primary")};
            border-color: ${themeGet("colors.primary")};
        `}
    ${({ $disabled }) =>
        $disabled === true &&
        css`
            color: ${themeGet("colors.gray600")};
            pointer-events: none;
            background-color: #fff;
        `}
    ${({ $action, $active }) =>
        $action === true &&
        $active !== true &&
        css`
            &:hover,
            &:focus {
                z-index: 1;
                color: ${themeGet("colors.gray700")};
                text-decoration: none;
                background-color: ${themeGet("colors.gray100")};
            }
        `}

    ${({ $flush }) =>
        $flush === true &&
        css`
            border-width: 0 0 1px;
            border-radius: 0;
            &:first-child,
            &:last-child {
                border-radius: 0;
            }
            &:last-child {
                border-bottom-width: 0;
            }
        `}
    ${({ $horizontal }) =>
        $horizontal === true &&
        css`
            &:first-child {
                border-bottom-left-radius: 0.25rem;
                border-top-right-radius: 0;
            }
            &:not(:first-child) {
                border-top-width: 1px;
                border-left-width: 0;
            }
            &:last-child {
                border-top-right-radius: 0.25rem;
                border-bottom-left-radius: 0;
            }
        `}
        ${(props) =>
        props.theme.name === "cool" &&
        css`
            border-color: ${tinycolor2(themeGet("colors.skinUi01")(props))
                .lighten(46)
                .toString()};
        `}
        ${(props) =>
        props.theme.name === "dark" &&
        css`
            background-color: inherit;
            border-color: rgba(255, 255, 255, 0.025);
        `}
    ${space};
    ${flexbox};
    ${layout}
`;
