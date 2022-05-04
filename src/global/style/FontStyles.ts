import { css } from 'styled-components';
import DMSansBold from 'assets/fonts/DMSans/DMSans-Bold.ttf';
import DMSansBoldItalic from 'assets/fonts/DMSans/DMSans-BoldItalic.ttf';
import DMSansItalic from 'assets/fonts/DMSans/DMSans-Italic.ttf';
import DMSansMedium from 'assets/fonts/DMSans/DMSans-Medium.ttf';
import DMSansMediumItalic from 'assets/fonts/DMSans/DMSans-MediumItalic.ttf';
import DMSansRegular from 'assets/fonts/DMSans/DMSans-Regular.ttf';
import OrbitronBold from 'assets/fonts/Orbitron/Orbitron-Bold.ttf';

const FontStyle = css`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansRegular});
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansItalic});
    font-weight: 400;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMedium});
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansMediumItalic});
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansBold});
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSansBoldItalic});
    font-weight: 700;
    font-style: italic;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Orbitron';
    src: url(${OrbitronBold});
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`;

export default FontStyle;
