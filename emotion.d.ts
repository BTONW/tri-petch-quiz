import { Theme as CustomTheme } from '@/src/types/styles/global'

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}