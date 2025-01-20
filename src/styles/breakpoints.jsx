import { css } from "styled-components";

const breakpoints = {
    mobile: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `,
    tabletPortrait: (...args) => css`
    @media (min-width: 768px) and (max-width: 991px) {
      ${css(...args)};
    }
  `,
    tabletLandscape: (...args) => css`
    @media (min-width: 992px) and (max-width: 1199px) {
      ${css(...args)};
    }
  `,
    desktop: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)};
    }
  `,
};

export default breakpoints;
