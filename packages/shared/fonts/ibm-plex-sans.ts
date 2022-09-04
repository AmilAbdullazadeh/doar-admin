import { css } from "styled-components";
import ibmCompleteBoldWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Bold.woff";
import ibmSlitBoldLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Bold-Latin1.woff2";
import ibmCompleteBoldItalickWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-BoldItalic.woff";

import ibmSplitBoldItalickLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-BoldItalic-Latin1.woff2";
import ibmCompleteExtraLightWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLight.woff";

import ibmSplitExtraLightLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLight-Latin1.woff2";
import ibmCompleteExtraLightItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-ExtraLightItalic.woff";

import ibmSplitExtraLightItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-ExtraLightItalic-Latin1.woff2";
import ibmCompleteItalickWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Italic.woff";

import ibmSplitItalickLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Italic-Latin1.woff2";
import ibmCompleteLightWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Light.woff";

import ibmSplitLightLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Light-Latin1.woff2";
import ibmCompleteLightItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-LightItalic.woff";

import ibmSplitLightItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-LightItalic-Latin1.woff2";
import ibmCompleteMediumWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Medium.woff";

import ibmSplitMediumLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Medium-Latin1.woff2";
import ibmCompleteMediumItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-MediumItalic.woff";

import ibmSplitMediumItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-MediumItalic-Latin1.woff2";
import ibmCompleteRegularWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Regular.woff";

import ibmSplitRegularLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Regular-Latin1.woff2";
import ibmCompleteSemiBoldWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-SemiBold.woff";

import ibmSplitSemiBoldLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-SemiBold-Latin1.woff2";
import ibmCompleteSemiBoldItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-SemiBoldItalic.woff";

import ibmSplitSemiBoldItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-SemiBoldItalic-Latin1.woff2";
import ibmCompleteTextWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Text.woff";

import ibmSplitTextLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Text-Latin1.woff2";
import ibmCompleteTextItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-TextItalic.woff";

import ibmSplitTextItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-TextItalic-Latin1.woff2";
import ibmCompleteThinWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-Thin.woff";

import ibmSplitThinLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-Thin-Latin1.woff2";
import ibmCompleteThinItalicWoff from "./ibm-plex-sans/complete/woff/IBMPlexSans-ThinItalic.woff";

import ibmSplitThinItalicLatin1Woff2 from "./ibm-plex-sans/split/woff2/IBMPlexSans-ThinItalic-Latin1.woff2";

export const IbmFontSans = css`
    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url(${ibmCompleteBoldWoff}) format("woff");
    }
    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local("IBM Plex Sans Bold"), local("IBMPlexSans-Bold"),
            url(${ibmSlitBoldLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url(${ibmCompleteBoldItalickWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: local("IBM Plex Sans Bold Italic"), local("IBMPlexSans-BoldItalic"),
            url(${ibmSplitBoldItalickLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url(${ibmCompleteExtraLightWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local("IBM Plex Sans ExtraLight"), local("IBMPlexSans-ExtraLight"),
            url(${ibmSplitExtraLightLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url(${ibmCompleteExtraLightItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: local("IBM Plex Sans ExtraLight Italic"),
            local("IBMPlexSans-ExtraLightItalic"),
            url(${ibmSplitExtraLightItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url(${ibmCompleteItalickWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: local("IBM Plex Sans Italic"), local("IBMPlexSans-Italic"),
            url(${ibmSplitItalickLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url(${ibmCompleteLightWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local("IBM Plex Sans Light"), local("IBMPlexSans-Light"),
            url(${ibmSplitLightLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url(${ibmCompleteLightItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: local("IBM Plex Sans Light Italic"),
            local("IBMPlexSans-LightItalic"),
            url(${ibmSplitLightItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url(${ibmCompleteMediumWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local("IBM Plex Sans Medium"), local("IBMPlexSans-Medium"),
            url(${ibmSplitMediumLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url(${ibmCompleteMediumItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: local("IBM Plex Sans Medium Italic"),
            local("IBMPlexSans-MediumItalic"),
            url(${ibmSplitMediumItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url(${ibmCompleteRegularWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local("IBM Plex Sans"), local("IBMPlexSans"),
            url(${ibmSplitRegularLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url(${ibmCompleteSemiBoldWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local("IBM Plex Sans SemiBold"), local("IBMPlexSans-SemiBold"),
            url(${ibmSplitSemiBoldLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url(${ibmCompleteSemiBoldItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: local("IBM Plex Sans SemiBold Italic"),
            local("IBMPlexSans-SemiBoldItalic"),
            url(${ibmSplitSemiBoldItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        font-display: swap;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url(${ibmCompleteTextWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 450;
        font-display: swap;
        src: local("IBM Plex Sans Text"), local("IBMPlexSans-Text"),
            url(${ibmSplitTextLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        font-display: swap;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url(${ibmCompleteTextItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 450;
        font-display: swap;
        src: local("IBM Plex Sans Text Italic"), local("IBMPlexSans-TextItalic"),
            url(${ibmSplitTextItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url(${ibmCompleteThinWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: normal;
        font-weight: 100;
        font-display: swap;
        src: local("IBM Plex Sans Thin"), local("IBMPlexSans-Thin"),
            url(${ibmSplitThinLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url(${ibmCompleteThinItalicWoff}) format("woff");
    }

    @font-face {
        font-family: "IBM Plex Sans";
        font-style: italic;
        font-weight: 100;
        font-display: swap;
        src: local("IBM Plex Sans Thin Italic"), local("IBMPlexSans-ThinItalic"),
            url(${ibmSplitThinItalicLatin1Woff2}) format("woff2");
        unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF,
            U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014,
            U+2018-201A, U+201C-201E, U+2020-2022, U+2026, U+2030, U+2039-203A,
            U+2044, U+2074, U+20AC, U+2122, U+2212, U+FB01-FB02;
    }
`;
