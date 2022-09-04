import { createGlobalStyle, themeGet, device } from '@doar/shared/styled';
// import {IbmFontSans, IonIcons} from "@doar/shared/fonts"

export const ResetCSS = createGlobalStyle`
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    html {
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${themeGet("fonts.heading")};
        font-weight: ${themeGet("fontWeights.body")};
        color: ${themeGet("colors.text")};
        font-size: ${themeGet("fontSize.body")};
        background: ${themeGet("colors.background")};
        .docs-story{
            background: ${themeGet("colors.background")};
        }
    }
    a {
        transition: ${themeGet("transitions")};
        color: ${themeGet("colors.text")};
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: ${themeGet("fonts.heading")};
        line-height: ${themeGet("lineHeights.heading")};
        color: ${themeGet("colors.text")};
        font-weight: ${themeGet("fontWeights.heading")};
        margin: 0;
        margin-bottom: 8px;
    }
    h1,
    .h1 {
        font-size: ${themeGet("fontSize.h1.0")};
        ${device.small} {
            font-size: ${themeGet("fontSize.h1.1")};
        }
        ${device.medium} {
            font-size: ${themeGet("fontSize.h1.2")};
        }
        ${device.large} {
            font-size: ${themeGet("fontSize.h1.3")};
        }
    }
    h2,
    .h2 {
        font-size: ${themeGet("fontSize.h2.0")};
        ${device.medium} {
            font-size: ${themeGet("fontSize.h2.1")};
        }
        ${device.large} {
            font-size: ${themeGet("fontSize.h2.2")};
        }
    }
    h3,
    .h3 {
        font-size: ${themeGet("fontSize.h3.0")};
        ${device.large} {
            font-size: ${themeGet("fontSize.h3.1")};
        }
    }
    h4,
    .h4 {
        font-size: ${themeGet("fontSize.h4.0")};
        ${device.large} {
            font-size: ${themeGet("fontSize.h4.1")};
        }
    }
    h5,
    .h5 {
        font-size: ${themeGet("fontSize.h5.0")};
        ${device.large} {
            font-size: ${themeGet("fontSize.h5.1")};
        }
    }
    h6,
    .h6 {
        font-size: ${themeGet("fontSize.h6.0")};
        ${device.large} {
            font-size: ${themeGet("fontSize.h6.1")};
        }
    }
    p {
        margin: 0 0 15px;
        font-family: ${themeGet("fonts.heading")};
        color: ${themeGet("colors.text")};
    }
    p:last-child, p:only-child {
        margin-bottom: 0;
    }

    .story-wrap > * {
        margin: 10px;
    }
    .docs-story  > div:last-child button{
        margin-left: 0;
    }
    #story--ui-navbar--navbar-controls{
        height: 335px;
        padding-left: 20px;
    }
    #story--ui-dropdown--dropdown-controls,
    #story--ui-dropdown--basic-example,
    #story--ui-dropdown--dropup,
    #story--ui-dropdown--dropleft,
    #story--ui-dropdown--dropright{
        height: 300px;
        text-align: center;
        .dropdown{
            width: 141px;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-top: 100px !important;
        }
    }
    #story--ui-avatar--sizes .story-wrap,
    #story--ui-avatar--shapes .story-wrap,
    #story--ui-avatar--initials .story-wrap,
    #story--ui-avatar--status-indicator .story-wrap,
    #story--ui-card--card-images .story-wrap,
    #story--ui-card--header-footer .story-wrap, 
    #story--ui-card--background-color .story-wrap{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
	#story--ui-images--image-controls{
		overflow: hidden;
		clear: both;
	}
	#story--ui-modal--modal-controls,
	#story--ui-modal--basic-example{
		background-color: #97a3b9;
		.modal{
			display: block;
			position: static
		}
	}
    input,
    select{
        box-sizing: border-box;
    }
    .blockquote {
        margin-bottom: 1rem;
        font-size: 1.09375rem;
    }
    .blockquote-footer {
        display: block;
        font-size: 80%;
        color: #7987a1;
    }
    .st-bg{
        background-color: #f5f6fa;    
        padding: 10px 15px;
    }
    ul{
        margin: 0;
        padding: 0;
        list-style: none; 
    }
    input[type="radio"], 
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }
    button, input {
        overflow: visible;
    }
    input, button, select, optgroup, textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
    select {
        word-wrap: normal;
    }
    .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
	.clearfix{
		clear: both;
	}
	.ov-hidden{
		overflow: hidden;
	}
	.text-center{
		text-align: center;
	}
	.text-right{
		text-align: right;
	}
`;

