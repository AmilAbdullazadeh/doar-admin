import { Children, FC, ReactChild, ReactText, FunctionComponent } from "react";
import classnames from "classnames";
import { FlexboxProps, SpaceProps, TypographyProps } from "@doar/shared/styled";
import { StyledNav, StyledNavLink, StyledDivider } from "./style";

type IChild = Exclude<ReactChild, ReactText>;

export interface IProps {
    /**
     * Pass extra classes
     */
    className?: string;
}

type CustomStyle =
    | "classic"
    | "icon"
    | "line"
    | "sidebar"
    | "social"
    | "with-icon";

interface INav extends IProps, FlexboxProps, SpaceProps, TypographyProps {
    pills?: boolean;
    align?: "left" | "right" | "center";
    vertical?: boolean;
    fill?: boolean;
    customStyle?: CustomStyle;
}

export const Nav: FC<INav> = ({
    children,
    className,
    pills,
    align,
    vertical,
    fill,
    customStyle,
    ...rest
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "NavLink") {
                return (
                    <child.type {...child.props} customStyle={customStyle} />
                );
            }
        }
        return <child.type {...child.props} />;
    });

    return (
        <StyledNav
            className={classnames(className, "nav")}
            $pills={pills}
            $align={align}
            $vertical={vertical}
            $fill={fill}
            $customStyle={customStyle}
            {...rest}
        >
            {RenderChild}
        </StyledNav>
    );
};

interface ILink extends IProps {
    path: string;
    active?: boolean;
    onClick?: (e: HTMLAnchorElement) => void;
    customStyle?: CustomStyle;
    iconPosition?: "left" | "right";
    iconDistance?: string;
    rel?: string;
    label?: string | undefined;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

export const NavLink: FC<ILink> = ({
    children,
    className,
    path,
    active,
    onClick,
    customStyle,
    iconPosition,
    iconDistance,
    rel,
    label,
    target,
    ...rest
}) => {
    return (
        <StyledNavLink
            className={classnames(className, "nav-link", active && "active")}
            path={path}
            $active={active}
            onClick={onClick}
            $customStyle={customStyle}
            $iconPosition={iconPosition}
            $iconDistance={iconDistance}
            rel={rel}
            target={target}
            aria-label={label}
            {...rest}
        >
            {children}
        </StyledNavLink>
    );
};

NavLink.defaultProps = {
    iconPosition: "left",
    iconDistance: "7px",
};

NavLink.displayName = "NavLink";

export const NavDivider: FC = () => {
    return <StyledDivider />;
};
