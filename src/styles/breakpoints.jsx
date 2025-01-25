import { css } from "styled-components";

// const breakpoints = {
//     mobile: (...args) => css`
//     @media (max-width: 767px) {
//       ${css(...args)};
//     }
//   `,
//     tabletPortrait: (...args) => css`
//     @media (min-width: 768px) and (max-width: 991px) {
//       ${css(...args)};
//     }
//   `,
//     tabletLandscape: (...args) => css`
//     @media (min-width: 992px) and (max-width: 1199px) {
//       ${css(...args)};
//     }
//   `,
//     desktop: (...args) => css`
//     @media (min-width: 1200px) {
//       ${css(...args)};
//     }
//   `,
// };


const sizes = {
    tablet: '768px',
    desktop: '992px',
};

export const breakpoints = {
    tablet: (styles) => css`
    @media (min-width: ${sizes.tablet}) and (max-width: ${parseInt(sizes.desktop) - 1}px) {
      ${styles}
    }
  `,
    desktop: (styles) => css`
    @media (min-width: ${sizes.desktop}) {
      ${styles}
    }
  `,
};

export default breakpoints;



