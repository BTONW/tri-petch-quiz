import { css } from '@emotion/react'

import { Theme } from '@/src/types/styles/global'

export const theme: Theme = {
  colors: {
    bg: {
      gray: '#F5F4F9',
      white: '#FFFFFF',
      purple: '#5E3DB3',
      darkBlue: '#090C35',
    }
  },
  space: {
    gap1: '.8rem',
    gap2: '1.2rem',
    gap3: '1.6rem',
  }
}

export default css`

  body {
    margin: 0;
    max-width: 100vw;
    overflow-x: hidden;
  }

  /** spacing padding */
  .p-1 { padding: ${theme.space.gap1}; }
  .pl-1 { padding-left: ${theme.space.gap1}; }
  .pr-1 { padding-right: ${theme.space.gap1}; }
  .pt-1 { padding-top: ${theme.space.gap1}; }
  .pb-1 { padding-bottom: ${theme.space.gap1}; }
  .px-1 {
    padding-left: ${theme.space.gap1} !important;
    padding-right: ${theme.space.gap1} !important;
  }
  .py-1 {
    padding-top: ${theme.space.gap1} !important;
    padding-bottom: ${theme.space.gap1} !important;
  }


  .p-2 { padding: ${theme.space.gap2}; }
  .pl-2 { padding-left: ${theme.space.gap2}; }
  .pr-2 { padding-right: ${theme.space.gap2}; }
  .pt-2 { padding-top: ${theme.space.gap2}; }
  .pb-2 { padding-bottom: ${theme.space.gap2}; }
  .px-2 {
    padding-left: ${theme.space.gap2} !important;
    padding-right: ${theme.space.gap2} !important;
  }
  .py-2 {
    padding-top: ${theme.space.gap2} !important;
    padding-bottom: ${theme.space.gap2} !important;
  }

  .p-3 { padding: ${theme.space.gap3}; }
  .pl-3 { padding-left: ${theme.space.gap3}; }
  .pr-3 { padding-right: ${theme.space.gap3}; }
  .pt-3 { padding-top: ${theme.space.gap3}; }
  .pb-3 { padding-bottom: ${theme.space.gap3}; }
  .px-3 {
    padding-left: ${theme.space.gap3} !important;
    padding-right: ${theme.space.gap3} !important;
  }
  .py-3 {
    padding-top: ${theme.space.gap3} !important;
    padding-bottom: ${theme.space.gap3} !important;
  }

  /** spacing margin */
  .m-1 { margin: ${theme.space.gap1}; }
  .ml-1 { margin-left: ${theme.space.gap1}; }
  .mr-1 { margin-right: ${theme.space.gap1}; }
  .mt-1 { margin-top: ${theme.space.gap1}; }
  .mb-1 { margin-bottom: ${theme.space.gap1}; }
  .mx-1 {
    margin-left: ${theme.space.gap1} !important;
    margin-right: ${theme.space.gap1} !important;
  }
  .my-1 {
    margin: ${theme.space.gap1} !important;
    margin-bottom: ${theme.space.gap1} !important;
  }

  .m-2 { margin: ${theme.space.gap2}; }
  .ml-2 { margin-left: ${theme.space.gap2}; }
  .mr-2 { margin-right: ${theme.space.gap2}; }
  .mt-2 { margin-top: ${theme.space.gap2}; }
  .mb-2 { margin-bottom: ${theme.space.gap2}; }
  .mx-2 {
    margin-left: ${theme.space.gap2} !important;
    margin-right: ${theme.space.gap2} !important;
  }
  .my-2 {
    margin: ${theme.space.gap2} !important;
    margin-bottom: ${theme.space.gap2} !important;
  }

  .m-3 { margin: ${theme.space.gap3}; }
  .ml-3 { margin-left: ${theme.space.gap3}; }
  .mr-3 { margin-right: ${theme.space.gap3}; }
  .mt-3 { margin-top: ${theme.space.gap3}; }
  .mb-3 { margin-bottom: ${theme.space.gap3}; }
  .mx-3 {
    margin-left: ${theme.space.gap3} !important;
    margin-right: ${theme.space.gap3} !important;
  }
  .my-3 {
    margin: ${theme.space.gap3} !important;
    margin-bottom: ${theme.space.gap3} !important;
  }

`