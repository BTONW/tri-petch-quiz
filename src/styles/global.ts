import { css } from '@emotion/react'

import { theme } from '@/src/constants/styles'
import { Theme } from '@/src/types/constants/styles'

export default css`

  body {
    margin: 0;
    max-width: 100vw;
    overflow-x: hidden;
  }

  /** spacing */
  .p-0 { padding: 0 !important; }
  .pl-0 { padding-left: 0 !important; }
  .pr-0 { padding-right: 0 !important; }
  .pt-0 { padding-top: 0 !important; }
  .pb-0 { padding-bottom: 0 !important; }
  .px-0 { padding-left: 0 !important; padding-right: 0 !important; }
  .py-0 { padding-top: 0 !important; padding-bottom: 0 !important; }

  .m-0 { margin: 0 !important; }
  .ml-0 { margin-left: 0 !important; }
  .mr-0 { margin-right: 0 !important; }
  .mt-0 { margin-top: 0 !important; }
  .mb-0 { margin-bottom: 0 !important; }
  .mx-0 { margin-left: 0 !important; margin-right: 0 !important; }
  .my-0 { margin-top: 0 !important; margin-bottom: 0 !important; }

  ${
    (Object.keys(theme.space) as Array<keyof Theme['space']>).map((key, idx) => css`

      .p-${idx + 1} { padding: ${theme.space[key]} !important; }
      .pl-${idx + 1} { padding-left: ${theme.space[key]} !important; }
      .pr-${idx + 1} { padding-right: ${theme.space[key]} !important; }
      .pt-${idx + 1} { padding-top: ${theme.space[key]} !important; }
      .pb-${idx + 1} { padding-bottom: ${theme.space[key]} !important; }
      .px-${idx + 1} { padding-left: ${theme.space[key]} !important; padding-right: ${theme.space[key]} !important; }
      .py-${idx + 1} { padding-top: ${theme.space[key]} !important; padding-bottom: ${theme.space[key]} !important; }

      .m-${idx + 1} { margin: ${theme.space[key]} !important; }
      .ml-${idx + 1} { margin-left: ${theme.space[key]} !important; }
      .mr-${idx + 1} { margin-right: ${theme.space[key]} !important; }
      .mt-${idx + 1} { margin-top: ${theme.space[key]} !important; }
      .mb-${idx + 1} { margin-bottom: ${theme.space[key]} !important; }
      .mx-${idx + 1} { margin-left: ${theme.space[key]} !important; margin-right: ${theme.space[key]} !important; }
      .my-${idx + 1} { margin-top: ${theme.space[key]} !important; margin-bottom: ${theme.space[key]} !important; }

    `)
  }

`