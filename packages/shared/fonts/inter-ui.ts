import { css } from "styled-components";
import interThinBetaWoff2 from "./inter-ui/Inter-UI-Thin-BETA.woff2";
import interThinBetaWoff from "./inter-ui/Inter-UI-Thin-BETA.woff";
import interThinItalicBetaWoff2 from "./inter-ui/Inter-UI-ThinItalic-BETA.woff2";
import interThinItalicBetaWoff from "./inter-ui/Inter-UI-ThinItalic-BETA.woff";
import interExtraLightBetaWoff2 from "./inter-ui/Inter-UI-ExtraLight-BETA.woff2";
import interExtraLightBetaWoff from "./inter-ui/Inter-UI-ExtraLight-BETA.woff";
import interExtraLightItalicBetaWoff2 from "./inter-ui/Inter-UI-ExtraLightItalic-BETA.woff2";
import interExtraLightItalicBetaWoff from "./inter-ui/Inter-UI-ExtraLightItalic-BETA.woff";
import interLightBetaWoff2 from "./inter-ui/Inter-UI-Light-BETA.woff2";
import interLightBetaWoff from "./inter-ui/Inter-UI-Light-BETA.woff";
import interLightItalicBetaWoff2 from "./inter-ui/Inter-UI-LightItalic-BETA.woff2";
import interLightItalicBetaWoff from "./inter-ui/Inter-UI-LightItalic-BETA.woff";
import interRegularWoff2 from "./inter-ui/Inter-UI-Regular.woff2";
import interRegularWoff from "./inter-ui/Inter-UI-Regular.woff";
import interItalicWoff2 from "./inter-ui/Inter-UI-Italic.woff2";
import interItalicWoff from "./inter-ui/Inter-UI-Italic.woff";
import interMediumWoff2 from "./inter-ui/Inter-UI-Medium.woff2";
import interMediumWoff from "./inter-ui/Inter-UI-Medium.woff";
import interMediumItalicWoff2 from "./inter-ui/Inter-UI-MediumItalic.woff2";
import interMediumItalicWoff from "./inter-ui/Inter-UI-MediumItalic.woff";
import interSemiBoldWoff2 from "./inter-ui/Inter-UI-SemiBold.woff2";
import interSemiBoldWoff from "./inter-ui/Inter-UI-SemiBold.woff";
import interSemiBoldItalicWoff2 from "./inter-ui/Inter-UI-SemiBoldItalic.woff2";
import interSemiBoldItalicWoff from "./inter-ui/Inter-UI-SemiBoldItalic.woff";
import interBoldWoff2 from "./inter-ui/Inter-UI-Bold.woff2";
import interBoldWoff from "./inter-ui/Inter-UI-Bold.woff";
import interBoldItalicWoff2 from "./inter-ui/Inter-UI-BoldItalic.woff2";
import interBoldItalicWoff from "./inter-ui/Inter-UI-BoldItalic.woff";
import interExtraBoldWoff2 from "./inter-ui/Inter-UI-ExtraBold.woff2";
import interExtraBoldWoff from "./inter-ui/Inter-UI-ExtraBold.woff";
import interExtraBoldItalicWoff2 from "./inter-ui/Inter-UI-ExtraBoldItalic.woff2";
import interExtraBoldItalicWoff from "./inter-ui/Inter-UI-ExtraBoldItalic.woff";
import interBlackWoff2 from "./inter-ui/Inter-UI-Black.woff2";
import interBlackWoff from "./inter-ui/Inter-UI-Black.woff";
import interBlackItalicWoff2 from "./inter-ui/Inter-UI-BlackItalic.woff2";
import interBlackItalicWoff from "./inter-ui/Inter-UI-BlackItalic.woff";

export const InterUi = css`
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 100;
        src: url(${interThinBetaWoff2}) format("woff2"),
            url(${interThinBetaWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 100;
        src: url(${interThinItalicBetaWoff2}) format("woff2"),
            url(${interThinItalicBetaWoff}) format("woff");
    }

    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 200;
        src: url(${interExtraLightBetaWoff2}) format("woff2"),
            url(${interExtraLightBetaWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 200;
        src: url(${interExtraLightItalicBetaWoff2}) format("woff2"),
            url(${interExtraLightItalicBetaWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 300;
        src: url(${interLightBetaWoff2}) format("woff2"),
            url(${interLightBetaWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 300;
        src: url(${interLightItalicBetaWoff2}) format("woff2"),
            url(${interLightItalicBetaWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 400;
        src: url(${interRegularWoff2}) format("woff2"),
            url(${interRegularWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 400;
        src: url(${interItalicWoff2}) format("woff2"),
            url(${interItalicWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 500;
        src: url(${interMediumWoff2}) format("woff2"),
            url(${interMediumWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 500;
        src: url(${interMediumItalicWoff2}) format("woff2"),
            url(${interMediumItalicWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 600;
        src: url(${interSemiBoldWoff2}) format("woff2"),
            url(${interSemiBoldWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 600;
        src: url(${interSemiBoldItalicWoff2}) format("woff2"),
            url(${interSemiBoldItalicWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 700;
        src: url(${interBoldWoff2}) format("woff2"),
            url(${interBoldWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 700;
        src: url(${interBoldItalicWoff2}) format("woff2"),
            url(${interBoldItalicWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 800;
        src: url(${interExtraBoldWoff2}) format("woff2"),
            url(${interExtraBoldWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 800;
        src: url(${interExtraBoldItalicWoff2}) format("woff2"),
            url(${interExtraBoldItalicWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: normal;
        font-weight: 900;
        src: url(${interBlackWoff2}) format("woff2"),
            url(${interBlackWoff}) format("woff");
    }
    @font-face {
        font-family: "Inter UI";
        font-display: swap;
        font-style: italic;
        font-weight: 900;
        src: url(${interBlackItalicWoff2}) format("woff2"),
            url(${interBlackItalicWoff}) format("woff");
    }
`;
