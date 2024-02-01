import { FC as ReactFC, PropsWithChildren, HTMLAttributes } from 'react'
import { StyledComponent } from '@emotion/styled'
import { Theme } from '@/src/types/constants/styles'

export interface Props {
  position?: 'left' | 'right'
}

export interface ContentProps extends Props {
  pb?: number
  color: keyof Theme['colors']['bg']
}

export interface ConsumerFC extends ReactFC<PropsWithChildren<{ Component: StyledComponent<any> }>> {}

export interface FC<P> extends ReactFC<PropsWithChildren<P>> {
  Content: ReactFC<ContentProps & PropsWithChildren<HTMLAttributes<HTMLDivElement>>>
  Container: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Heading: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Topic: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Description: ReactFC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>>
}
