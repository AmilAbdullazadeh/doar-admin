import styled, {
    css,
    themeGet,
    layout,
    space,
    LayoutProps,
    color as colorStyles,
    ColorProps,
    typography,
    TypographyProps,
    SpaceProps,
    tinycolor,
} from "@doar/shared/styled";

interface IProps extends LayoutProps, SpaceProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    $shape?: "circle" | "rounded" | "square";
    $initialText?: boolean;
    $status?: "online" | "offline";
}

export const StyledAvatar = styled(({ display, mr, ...rest }) => (
    <div {...rest} />
))<IProps>`
    position: relative;
    ${({ $size }) =>
        ($size === "default" || !$size) &&
        css`
            width: 38px;
            height: 38px;
        `}

    ${({ $size }) =>
        $size === "xs" &&
        css`
            width: 26px;
            height: 26px;
        `}

    ${({ $size }) =>
        $size === "sm" &&
        css`
            width: 32px;
            height: 32px;
        `}

    ${({ $size }) =>
        $size === "md" &&
        css`
            width: 48px;
            height: 48px;
        `}

    ${({ $size }) =>
        $size === "lg" &&
        css`
            width: 64px;
            height: 64px;
        `}

    ${({ $size }) =>
        $size === "xl" &&
        css`
            width: 72px;
            height: 72px;
        `}
    ${({ $size }) =>
        $size === "xxl" &&
        css`
            width: 100px;
            height: 100px;
        `}

    ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
            img,
            .avatar-initial {
                border-radius: 0;
            }
        `}

    ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.circle")};
            img,
            .avatar-initial {
                border-radius: ${themeGet("radii.circle")};
            }
        `}
    
    ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.rounded")};
            img,
            .avatar-initial {
                border-radius: ${themeGet("radii.rounded")};
            }
        `}
    ${({ $status }) =>
        ($status === "online" || $status === "offline") &&
        css`
            &:after {
                content: "";
                position: absolute;
                right: 2px;
                bottom: 2px;
                border-radius: 100%;
                box-shadow: 0 0 0 2px #fff;
            }
        `}
    ${({ $status }) =>
        $status === "online" &&
        css`
            &:after {
                background-color: ${themeGet("colors.success")};
            }
        `}
    ${({ $status }) =>
        $status === "offline" &&
        css`
            &:after {
                background-color: ${themeGet("colors.text4")};
                ${(props) =>
                    props.theme.name === "dark" &&
                    css`
                        background-color: ${themeGet("colors.gray500")};
                    `}
            }
        `}
    
    ${({ $size, $status }) =>
        $size === "xs" &&
        Boolean($status) &&
        css`
            &:after {
                width: 5px;
                height: 5px;
            }
        `}

    ${({ $size, $status }) =>
        $size === "sm" &&
        Boolean($status) &&
        css`
            &:after {
                width: 7px;
                height: 7px;
            }
        `}

	${({ $size, $status }) =>
        ($size === "default" || !$size) &&
        Boolean($status) &&
        css`
            &:after {
                width: 7px;
                height: 7px;
            }
        `}

	${({ $size, $status }) =>
        $size === "md" &&
        Boolean($status) &&
        css`
            &:after {
                width: 9px;
                height: 9px;
            }
        `}
		

    ${({ $size, $status }) =>
        $size === "lg" &&
        Boolean($status) &&
        css`
            &:after {
                width: 10px;
                height: 10px;
            }
        `}

	${({ $size, $status, $shape }) =>
        $size === "lg" &&
        Boolean($status) &&
        $shape === "circle" &&
        css`
            &:after {
                bottom: 3px;
                right: 4px;
            }
        `}

    ${({ $size, $status }) =>
        $size === "xl" &&
        Boolean($status) &&
        css`
            &:after {
                width: 11px;
                height: 11px;
                box-shadow: 0 0 0 2.5px #fff;
            }
        `}

	${({ $size, $status, $shape }) =>
        $size === "xl" &&
        Boolean($status) &&
        $shape === "circle" &&
        css`
            &:after {
                bottom: 4px;
                right: 5px;
            }
        `}

	${({ $size, $status }) =>
        $size === "xxl" &&
        Boolean($status) &&
        css`
            &:after {
                width: 13px;
                height: 13px;
                box-shadow: 0 0 0 2.5px #fff;
            }
        `}

	${({ $size, $status, $shape }) =>
        $size === "xxl" &&
        Boolean($status) &&
        $shape === "circle" &&
        css`
            &:after {
                bottom: 6px;
                right: 7px;
            }
        `}

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ${(props) =>
        props.theme.name === "dark" &&
        (props.$status === "online" || props.$status === "offline") &&
        css`
            &:after {
                box-shadow: 0 0 0 1.5px
                    ${tinycolor(themeGet("colors.gray900")(props))
                        .darken(5)
                        .toString()};
            }
        `}

    ${(props) =>
        props.theme.name === "dark" &&
        (props.$size === "xxl" || props.$size === "xl") &&
        Boolean(props.$status) &&
        css`
            &:after {
                box-shadow: 0 0 0 2.5px
                    ${tinycolor(themeGet("colors.gray900")(props))
                        .darken(5)
                        .toString()};
            }
        `}

    ${layout};
    ${space};
`;

interface IAvatarText extends ColorProps, TypographyProps {
    $size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export const StyledInitialText = styled(
    ({ color, bg, opacity, fontWeight, ...rest }) => <span {...rest} />
)<IAvatarText>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themeGet("colors.text3")};
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    line-height: 100%;
    font-family: ${themeGet("fonts.interUi")};
    ${({ $size }) =>
        $size === "xs" &&
        css`
            font-size: 10px;
        `}
    ${({ $size }) =>
        $size === "sm" &&
        css`
            font-size: 13px;
        `}
        ${({ $size }) =>
        $size === "md" &&
        css`
            font-size: 18px;
        `}
        ${({ $size }) =>
        $size === "lg" &&
        css`
            font-size: 24px;
        `}
        ${({ $size }) =>
        $size === "xl" &&
        css`
            font-size: 30px;
        `}
        ${({ $size }) =>
        $size === "xxl" &&
        css`
            font-size: 45px;
        `}
        ${({ $shape }) =>
        $shape === "square" &&
        css`
            border-radius: 0;
        `}
        ${({ $shape }) =>
        $shape === "circle" &&
        css`
            border-radius: ${themeGet("radii.circle")};
        `}
        ${({ $shape }) =>
        $shape === "rounded" &&
        css`
            border-radius: ${themeGet("radii.rounded")};
        `}
    ${colorStyles};
    ${typography};
`;
