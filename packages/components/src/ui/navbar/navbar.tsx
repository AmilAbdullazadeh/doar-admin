import React, { useCallback } from "react";
import { IMenu } from "@doar/shared/types";
import { getSiblings } from "@doar/shared/methods";
import { useClickOutside } from "@doar/shared/hooks";
import {
    StyledNavbar,
    StyledNavitem,
    StyledNavlink,
    StyledSubmenu,
    StyledSubNavItem,
    StyledSubNavlink,
    StyledMegaMenu,
    StyledMegaMenuInner,
    StyledMegamenuList,
    StyledMegamenuLabel,
} from "./style";

interface IProps {
    menus: IMenu[];
}

export const Navbar: React.FC<IProps> = ({ menus }) => {
    const clickHandler = (e: React.MouseEvent, hasChildren: boolean) => {
        if (hasChildren) {
            e.preventDefault();
            let target = e.currentTarget as HTMLElement;
            if (target.nodeName === "A") {
                target = target.parentElement as HTMLElement;
            }
            const submenu = target.querySelector(".submenu");
            const siblings = getSiblings(target);
            submenu?.classList.toggle("open");
            siblings.forEach((sib) => {
                sib.childNodes.forEach((child) => {
                    const childHT = child as HTMLElement;
                    childHT?.classList?.remove("open");
                });
            });
        }
    };
    const onClose = useCallback(() => {
        const nav = document.querySelector(".navbar");
        const submenu = nav?.querySelectorAll(".submenu");
        submenu?.forEach((el) => el.classList.remove("open"));
    }, []);

    const containerRef = useClickOutside<HTMLUListElement>(onClose);
    return (
        <StyledNavbar ref={containerRef} className="navbar">
            {menus &&
                menus.map((nav: IMenu) => {
                    const {
                        submenu,
                        megamenu,
                        id: navId,
                        Icon: NavIcon,
                        label: navLabel,
                    } = nav;
                    const hasSubmenu = !!submenu?.length;
                    const hasMegamenu = !!megamenu?.length;
                    const hasChildren = hasSubmenu || hasMegamenu;
                    return (
                        <StyledNavitem
                            $hasSubmenu={hasChildren}
                            key={navId}
                            onClick={(e) => clickHandler(e, hasChildren)}
                        >
                            <StyledNavlink path={hasChildren ? "#!" : nav.url}>
                                {NavIcon && <NavIcon />}
                                {navLabel}
                            </StyledNavlink>
                            {hasSubmenu && (
                                <StyledSubmenu className="submenu">
                                    {submenu?.map(
                                        ({ id, label, url, Icon }) => (
                                            <StyledSubNavItem key={id}>
                                                <StyledSubNavlink path={url}>
                                                    {Icon && <Icon />}
                                                    {label}
                                                </StyledSubNavlink>
                                            </StyledSubNavItem>
                                        )
                                    )}
                                </StyledSubmenu>
                            )}
                            {hasMegamenu && (
                                <StyledMegaMenu className="submenu">
                                    <StyledMegaMenuInner>
                                        {megamenu?.map((megaNav) => (
                                            <StyledMegamenuList
                                                key={megaNav.id}
                                            >
                                                <>
                                                    {megaNav?.title && (
                                                        <StyledMegamenuLabel>
                                                            {megaNav?.title}
                                                        </StyledMegamenuLabel>
                                                    )}
                                                    {megaNav?.submenu?.map(
                                                        ({
                                                            id,
                                                            label,
                                                            url,
                                                            Icon,
                                                        }) => (
                                                            <StyledSubNavItem
                                                                key={id}
                                                            >
                                                                <StyledSubNavlink
                                                                    path={url}
                                                                >
                                                                    {Icon && (
                                                                        <Icon />
                                                                    )}
                                                                    {label}
                                                                </StyledSubNavlink>
                                                            </StyledSubNavItem>
                                                        )
                                                    )}
                                                </>
                                            </StyledMegamenuList>
                                        ))}
                                    </StyledMegaMenuInner>
                                </StyledMegaMenu>
                            )}
                        </StyledNavitem>
                    );
                })}
        </StyledNavbar>
    );
};

Navbar.defaultProps = {
    menus: [],
};
