import { css } from '@linaria/core';

export const globals = css`
  :global() {
    :root {
      --dark-grey: #2b2b2e;
      --gray: #bebebd;
      --light-gray: #f5f3ef;
      --dark-blue: #5a8192;
      --white: #fff;

      --font-primary: 'Chivo';
      --font-bold: 'BowlbyOneSC';
      --font-regular: 'BowlbyOne';

      --text-size-base: 18px;
      --text-size-tiny: calc(var(--text-size-base) - 6px);
      --text-size-small: calc(var(--text-size-base) - 4px);
      --text-size-medium: var(--text-size-base);
      --text-size-big: calc(var(--text-size-base) + 4px);
      --text-size-large: calc(var(--text-size-base) + 6px);
      --text-size-huge: calc(var(--text-size-base) + 12px);
      --text-title-normal: calc(var(--text-size-base) + 30px);
      --text-title-large: calc(var(--text-size-base) + 36px);
      --text-title-big: calc(var(--text-size-base) + 46px);
      --text-title-huge: calc(var(--text-size-base) + 56px);

      --transition-1: all 100ms ease-in-out;
      --transition-2: all 500ms ease-in-out;
      --transition-3: all 1000ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @font-face {
      font-family: 'Chivo';
      src: url(../assets/fonts/Chivo-Regular.ttf) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'Chivo';
      src: url(../assets/fonts/Chivo-Light.ttf) format('truetype');
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: 'Chivo';
      src: url(../assets/fonts/Chivo-Bold.ttf) format('truetype');
      font-weight: bold;
      font-style: normal;
    }
    @font-face {
      font-family: 'Chivo';
      src: url(../assets/fonts/Chivo-Black.ttf) format('truetype');
      font-weight: 900;
      font-style: normal;
    }
    @font-face {
      font-family: 'Jomhuria';
      font-style: normal;
      font-weight: normal;
      src: url(../assets/fonts/Jomhuria-Regular.ttf) format('truetype');
    }
    @font-face {
      font-family: 'Oi-regular';
      font-style: normal;
      font-weight: normal;
      src: url(../assets/fonts/Oi-Regular.ttf) format('truetype');
    }
    @font-face {
      font-family: 'BowlbyOne';
      font-style: normal;
      font-weight: bold;
      src: url(../assets/fonts/BowlbyOne-Regular.ttf) format('truetype');
    }
    @font-face {
      font-family: 'BowlbyOneSC';
      font-style: normal;
      font-weight: bold;
      src: url(../assets/fonts/BowlbyOneSC-Regular.ttf) format('truetype');
    }

    @layer reset {
      *,
      *:before,
      *:after {
        box-sizing: border-box;
      }

      html,
      body,
      div,
      span,
      object,
      iframe,
      figure,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      code,
      em,
      img,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      b,
      u,
      i,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      main,
      canvas,
      embed,
      footer,
      header,
      nav,
      section,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
      }

      footer,
      header,
      nav,
      section,
      main {
        display: block;
      }

      body {
        line-height: 1;
      }

      a {
        text-decoration: none;
        color: inherit;
      }

      ol,
      ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      input {
        -webkit-appearance: none;
        border-radius: 0;
      }
    }

    /* antd sets font, color, line-height, margins and word-break on these roots; text styling is owned by the components */
    :where(.ant-typography, .ant-btn) {
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      color: inherit;
      margin: 0;
      word-break: normal;
    }

    body {
      background-color: var(--white);
      height: 100vh;
      font-family: var(--font-primary);
      font-size: var(--text-size-base);
      color: var(--dark-grey);
    }
  }
`;
