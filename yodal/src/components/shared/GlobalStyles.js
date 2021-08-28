import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  // font face
  @font-face {
      font-family: 'SF Pro Display';
      src: url('../../static/fonts/SFProDisplay-Regular.woff2') format('woff2'),
          url('../../static/fonts/SFProDisplay-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'SF Pro Display';
      src: url('../../static/fonts/SFProDisplay-Semibold.woff2') format('woff2'),
          url('../../static/fonts/SFProDisplay-Semibold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'SF Pro Display';
      src: url('../../static/fonts/SFProDisplay-Medium.woff2') format('woff2'),
          url('../../static/fonts/SFProDisplay-Medium.woff') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'SF Pro Display';
      src: url('../../static/fonts/SFProDisplay-Bold.woff2') format('woff2'),
          url('../../static/fonts/SFProDisplay-Bold.woff') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'SF Pro Text';
      src: url('../../static/fonts/SFProText-Regular.woff2') format('woff2'),
          url('../../static/fonts/SFProText-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }



  :root {
    // Colours
    --primary: #ACE3EF;
    --secondary: #134169;
    --warning: #FE5442;
    --success: #00CFB4;
    --black: #1E1E1E;
    --white: #FFF;
    --gray: #EEF0F4;

    // Colours as Intentions
    --bodyTextColor: var(--black);
    

    // Typography
    --headingFont: "SF Pro Display", sans-serif;
    --bodyFont: "SF Pro Text", sans-serif;

    --bodyFontSize: 1.2rem;

    --h1: 3.6rem;
    --h2: 3.2rem;
    --h3: 2.4rem;
    --h4: 1.8rem;
    
    /* Elevation */
    --botShadow: 0px 5px 63px -15px rgba(19, 65, 105, 0.1);
    --topShadow: 0px -4px 63px -22px rgba(19, 65, 105, 0.17);
    --cardShadow: 0px 1px 2px rgba(43, 71, 139, 0.15), 0px 7px 15px 3px rgba(19, 65, 105, 0.04);
    --buttonShadow: 0px 2px 2px rgba(19, 65, 105, 0.21);

    // Configs
    --maxWidth: 1024px;
    --normalRadius: 10px;

    // Transitions
    --cubeTransition: all 0.15s cubic-bezier(1,.25,0,.75) 0s;
  }

  // !smooth scrolling
  html {
    scroll-behavior: smooth;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html,body {
    min-height: 100vh;
  }

  html {
    box-sizing: border-box;
    font-size: 57.5%;
    overflow-x: hidden;
  }

  body {
    font-size: var(--bodyFontSize);
    font-family: var(--bodyFont);
  }

  p {
    line-height: 30px;
  }

  h1,h2,h3,h4,h5 {
    font-family: var(--headingFont);
    font-weight: var(--headingWeight);
    margin: 0; padding: 0;
  }

  h1 {
    font-size: var(--h1);
  }

  h2 {
    font-size: var(--h2);
  }

  h3 {
    font-size: var(--h3); 
  }

  a {
    color: var(--black);
    text-decoration: none;
  }

  @media ${props => props.theme.breakpoints.s} {
    // Manually override: 500px < x < 769px
  }

  @media ${props => props.theme.breakpoints.m} {
    :root {
    }


    html {
      font-size: 60%;
    }
  }

  @media ${props => props.theme.breakpoints.l} {
    :root {
    }

    html {
      font-size: 62.5%;
    }
  }

`;

export default GlobalStyle;
