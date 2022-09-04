import { FC } from "react";
import { ThemeProvider, themes } from "@doar/shared/styled";
import { GlobalStyle } from "@doar/shared/css";
import { TTheme } from "@doar/shared/types";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleTheme } from "./redux/slices/ui";
import SettingsCard from "./components/settings";

const Theme: FC = ({ children }) => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state) => state.ui);

    const themeHandler = (curTheme: TTheme) => {
        dispatch(toggleTheme({ theme: curTheme }));
    };
    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <SettingsCard themeHandler={themeHandler} curTheme={theme} />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
