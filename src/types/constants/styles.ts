export interface Theme {
  colors: {
    bg: {
      gray: string
      white: string
      purple: string
      darkBlue: string
    },
    text: {
      black: string
      white: string
      purple: string
      grayPrimary: string
      graySecondary: string
    },
    underline: {
      white: string
      purple: string
    },
    bullets: {
      active: string
      inActive: string
    }
  },
  space: {
    gap1: string
    gap2: string
    gap3: string
  }
}