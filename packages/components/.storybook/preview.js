import * as React from 'react';
import {
  addDecorator
} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import {
  ThemeProvider,
  themes
} from '@doar/shared/styled';
import {
  ResetCSS
} from "./reset";

addDecorator(StoryRouter());

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'classic',
    toolbar: {
      icon: 'box',
      // Array of plain string values or MenuItem shape (see below)
      items: ["classic", "light", "cool", "dark"],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const getTheme = (themeName) => {
  return themes[themeName]
}

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  return ( <
    ThemeProvider theme = {
      theme
    } >
    <
    ResetCSS / >
    <
    div className = "story-wrap" >
    <
    Story {
      ...context
    }
    /> <
    /div> <
    /ThemeProvider>
  )
}
export const decorators = [withThemeProvider];

const customViewports = {
  extraLargeDevices: {
    name: 'Extra Large Devices',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
  largeDevices: {
    name: 'Large Devices',
    styles: {
      width: '992px',
      height: '1024px',
    },
  },
  mediumDevices: {
    name: 'Medium Devices',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  smallDevices: {
    name: 'Small devices',
    styles: {
      width: '576px',
      height: '720px',
    },
  },
  extraSmallDevices: {
    name: 'Extra Small devices',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
};

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  viewport: {
    viewports: customViewports
  },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  }
}