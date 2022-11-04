import { injectGlobal } from '@emotion/css';

injectGlobal`
:root {
  --backgroundHeader: #282a36;
  --backgroundBody: #383a59;
  --heightHeader: 10vh;
  --heightMainComponent: 100vh;
  --widthxs: 600px;
  --widths: 900px;
  --widthm: 1200px;
  --widthxl: 1800;
}
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}



body {
  background: var(--backgroundBody);
  font-weight: normal;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f2f2f2;
  font-family: 'Roboto Mono', monospace;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}`;
