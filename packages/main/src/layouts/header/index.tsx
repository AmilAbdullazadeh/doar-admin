import { FC, useState, useCallback, useEffect } from "react";
import { Search, Menu, X, ArrowLeft } from "react-feather";
import { Navbar, Button } from "@doar/components";
import { menuData } from "@doar/shared/data";
import MessageDropdown from "../../components/header/message-dropdown";
import NotificationDropdown from "../../components/header/notification-dropdown";
import ProfileDropdown from "../../components/header/profile-dropdown";
import NavSearch from "../../components/header/nav-search";
import Logo from "../../components/logo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleSidebar, toggleBody } from "../../redux/slices/ui";
import {
    StyledHeader,
    StyledLogo,
    StyledNavbarWrap,
    StyledNavbarMenu,
    StyleNavbarRight,
    StyledNavbarElement,
    StyledNavbarHeader,
    StyledNavbarBody,
    StyledNavbarTitle,
    StyledMenuBtn,
    StyledSidebarBtn,
} from "./style";

interface IProps {
    hasSidebar?: boolean;
    sidebarLayout?: 1 | 2;
}

const Header: FC<IProps> = ({ hasSidebar, sidebarLayout }) => {
    const dispatch = useAppDispatch();
    const { sidebar, isBody } = useAppSelector((state) => state.ui);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchHandler = useCallback(() => {
        setSearchOpen((prev) => !prev);
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);
    const sidebarHandler = useCallback(
        (_, isOpen?: "open") => {
            dispatch(toggleSidebar({ isOpen }));
        },
        [dispatch]
    );

    const bodyHandler = useCallback(() => {
        dispatch(toggleBody());
        dispatch(toggleSidebar({ isOpen: "open" }));
    }, [dispatch]);

    const menuHandler = useCallback(() => {
        setMenuOpen((prev) => !prev);
        if (menuOpen) {
            sidebarHandler(undefined, "open");
        }
    }, [menuOpen, sidebarHandler]);

    useEffect(() => {
        return () => {
            sidebarHandler(undefined, "open");
            bodyHandler();
        };
    }, [sidebarHandler, bodyHandler]);

    return (
        <>
            <StyledHeader>
                {hasSidebar && sidebarLayout === 1 && (
                    <>
                        <StyledMenuBtn
                            variant="texted"
                            onClick={menuHandler}
                            $hasSidebar={hasSidebar}
                            $sidebarOpen={sidebar}
                            $bodyOpen={isBody}
                            className="menu-btn"
                        >
                            <Menu size={20} strokeWidth="2.5px" />
                        </StyledMenuBtn>
                        <StyledSidebarBtn
                            variant="texted"
                            onClick={!isBody ? sidebarHandler : bodyHandler}
                            $sidebarOpen={sidebar}
                            $bodyOpen={isBody}
                            className="sidebar-btn"
                        >
                            <ArrowLeft size={20} strokeWidth="2.5px" />
                        </StyledSidebarBtn>
                    </>
                )}
                {hasSidebar && sidebarLayout === 2 && (
                    <>
                        <StyledMenuBtn
                            variant="texted"
                            onClick={menuHandler}
                            $hasSidebar={hasSidebar}
                            $sidebarOpen={!sidebar}
                        >
                            <Menu size={20} strokeWidth="2.5px" />
                        </StyledMenuBtn>
                        <StyledSidebarBtn
                            variant="texted"
                            onClick={sidebarHandler}
                            $sidebarOpen={!sidebar}
                        >
                            <ArrowLeft size={20} strokeWidth="2.5px" />
                        </StyledSidebarBtn>
                    </>
                )}
                {!hasSidebar && (
                    <StyledMenuBtn
                        variant="texted"
                        onClick={menuHandler}
                        $hasSidebar={hasSidebar}
                        $sidebarOpen={!sidebar}
                    >
                        <Menu size={20} strokeWidth="2.5px" />
                    </StyledMenuBtn>
                )}
                <StyledLogo>
                    <Logo />
                </StyledLogo>
                <StyledNavbarWrap $isOpen={menuOpen} onClick={menuHandler}>
                    <StyledNavbarMenu
                        $isOpen={menuOpen}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <StyledNavbarHeader>
                            <Logo />
                            <Button variant="texted" onClick={menuHandler}>
                                <X
                                    color="#7987a1"
                                    width={20}
                                    strokeWidth="2.5px"
                                />
                            </Button>
                        </StyledNavbarHeader>
                        <StyledNavbarBody>
                            <StyledNavbarTitle>
                                MAIN NAVIGATION
                            </StyledNavbarTitle>
                            <Navbar menus={menuData} />
                        </StyledNavbarBody>
                    </StyledNavbarMenu>
                </StyledNavbarWrap>
                <StyleNavbarRight>
                    <StyledNavbarElement>
                        <Button
                            variant="texted"
                            onClick={searchHandler}
                            className="search-btn"
                        >
                            <Search className="header-icon" />
                        </Button>
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["8px", "15px"]}>
                        <MessageDropdown />
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["8px", "15px"]}>
                        <NotificationDropdown />
                    </StyledNavbarElement>
                    <StyledNavbarElement ml={["15px", "20px", "30px"]}>
                        <ProfileDropdown />
                    </StyledNavbarElement>
                </StyleNavbarRight>
            </StyledHeader>
            <NavSearch isOpen={searchOpen} onClose={searchHandler} />
        </>
    );
};

Header.defaultProps = {
    sidebarLayout: 1,
};

export default Header;
