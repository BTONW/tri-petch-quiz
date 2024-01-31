import { FC as ReactFC, PropsWithChildren, HTMLAttributes } from 'react'
import { StyledComponent} from '@emotion/styled'

export interface FC<P> extends ReactFC<P> {
  Content: ReactFC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>
  Container: StyledComponent<any>
  Heading: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Topic: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Description: ReactFC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>>
}

export interface Props {
  position: 'left' | 'right'
}