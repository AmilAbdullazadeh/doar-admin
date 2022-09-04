import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { SpaceProps } from "@doar/shared/styled";
import { StyledNav, StyledBreadcrumb, StyledBreadcrumbItem } from "./style";

interface IBreadcrumb extends SpaceProps {
    /**
     * Extra class name
     */
    className?: string;
    /**
     * Element type. Default is `nav`
     */
    as?: React.ElementType;
}

export const Breadcrumb: React.FC<IBreadcrumb> = ({
    children,
    className,
    as,
    ...restProps
}) => (
    <StyledNav aria-label="breadcrumb" as={as}>
        <StyledBreadcrumb
            className={classnames(className, "breadcrumb")}
            {...restProps}
        >
            {children}
        </StyledBreadcrumb>
    </StyledNav>
);

interface IBreadcrumbItem {
    path?: string;
    active?: boolean;
    className?: string;
}

export const BreadcrumbItem: React.FC<IBreadcrumbItem> = ({
    children,
    path,
    active,
    className,
}) => (
    <StyledBreadcrumbItem
        className={classnames(className, "breadcrumb-item", active && "active")}
        $active={active}
        aria-current={active && "page"}
    >
        {active && children}
        {!active && path && <Link to={path}>{children}</Link>}
    </StyledBreadcrumbItem>
);
