import { Theme as CustomTheme } from '@/src/types/constants/styles'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}