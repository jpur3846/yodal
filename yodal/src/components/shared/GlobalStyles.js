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

    --h1: 3.6rem;
    --h2: 3.3rem;
    --h3: 3rem;
    --h4: 2rem;
    --h5: 1.7rem;
    --h6: 1.5rem;
    --bodyFontSize: 1.5rem;
    --logoFontSize: 2.2rem;
    --footerlogoFontSize: 1.5rem;
    --bodyLineHeight: 30px;
    // Title Typography
    
    // Shadows

    // Material UI Shadows
    /* Elevation */
    --navElevation: 0px 4px 50px rgba(0, 0, 0, 0.15);
     --level-1: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    --level-2: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    --level-3: 0px 1px 8px 0px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14),
    0px 3px 3px -2px rgba(0, 0, 0, 0.12);
    --level-4: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    --level-5: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14),
    0px 1px 14px 0px rgba(0, 0, 0, 0.12);
    --level-6: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    --level-7: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
    0px 7px 10px 1px rgba(0, 0, 0, 0.14),
    0px 2px 16px 1px rgba(0, 0, 0, 0.12);
    --level-8: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
    0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    --level-9: 0px 5px 6px -3px rgba(0, 0, 0, 0.2),
    0px 9px 12px 1px rgba(0, 0, 0, 0.14),
    0px 3px 16px 2px rgba(0, 0, 0, 0.12);
    --level-10: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14),
    0px 4px 18px 3px rgba(0, 0, 0, 0.12);
    --level-11: 0px 6px 7px -4px rgba(0, 0, 0, 0.2),
    0px 11px 15px 1px rgba(0, 0, 0, 0.14),
    0px 4px 20px 3px rgba(0, 0, 0, 0.12);
    --level-12: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 12px 17px 2px rgba(0, 0, 0, 0.14),
    0px 5px 22px 4px rgba(0, 0, 0, 0.12);
    --level-13: 0px 7px 8px -4px rgba(0, 0, 0, 0.2),
    0px 13px 19px 2px rgba(0, 0, 0, 0.14),
    0px 5px 24px 4px rgba(0, 0, 0, 0.12);
    --level-14: 0px 7px 9px -4px rgba(0, 0, 0, 0.2),
    0px 14px 21px 2px rgba(0, 0, 0, 0.14),
    0px 5px 26px 4px rgba(0, 0, 0, 0.12);
    --level-15: 0px 8px 9px -5px rgba(0, 0, 0, 0.2),
    0px 15px 22px 2px rgba(0, 0, 0, 0.14),
    0px 6px 28px 5px rgba(0, 0, 0, 0.12);
    --level-16: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    --level-17: 0px 8px 11px -5px rgba(0, 0, 0, 0.2),
    0px 17px 26px 2px rgba(0, 0, 0, 0.14),
    0px 6px 32px 5px rgba(0, 0, 0, 0.12);
    --level-18: 0px 9px 11px -5px rgba(0, 0, 0, 0.2),
    0px 18px 28px 2px rgba(0, 0, 0, 0.14),
    0px 7px 34px 6px rgba(0, 0, 0, 0.12);
    --level-19: 0px 9px 12px -6px rgba(0, 0, 0, 0.2),
    0px 19px 29px 2px rgba(0, 0, 0, 0.14),
    0px 7px 36px 6px rgba(0, 0, 0, 0.12);
    --level-20: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14),
    0px 8px 38px 7px rgba(0, 0, 0, 0.12);
    --level-21: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 21px 33px 3px rgba(0, 0, 0, 0.14),
    0px 8px 40px 7px rgba(0, 0, 0, 0.12);
    --level-22: 0px 10px 14px -6px rgba(0, 0, 0, 0.2),
    0px 22px 35px 3px rgba(0, 0, 0, 0.14),
    0px 8px 42px 7px rgba(0, 0, 0, 0.12);
    --level-23: 0px 11px 14px -7px rgba(0, 0, 0, 0.2),
    0px 23px 36px 3px rgba(0, 0, 0, 0.14),
    0px 9px 44px 8px rgba(0, 0, 0, 0.12);
    --level-24: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14),
    0px 9px 46px 8px rgba(0, 0, 0, 0.12);

    // Configs
    --maxWidth: 1024px;

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

  h4 {
    font-size: var(--h4);
  }

  h5 {
    font-size: var(--h5);
  }

  h6 {
    font-size: var(--h6);
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
