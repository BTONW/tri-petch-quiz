import { FC as ReactFC, PropsWithChildren, HTMLAttributes } from 'react'
import { SwiperClass } from 'swiper/react'
import { StyledComponent } from '@emotion/styled'
import { Theme } from '@/src/types/constants/styles'

export interface Props {
  position?: 'left' | 'right'
}

export interface ContentProps extends Props {
  pb?: number
  color: keyof Theme['colors']['bg']
}

export interface ImageProps extends Props {
  options: {
    src: {
      mobile: string
      tablet: string
      desktop: string
    }
    size: {
      mobile: { width: number, height: number }
      tablet: { width: number, height: number }
      desktop: { width: number, height: number }
    }
  }
}

export interface SwiperProps {
  active: number
  isSwipe: boolean
  onSwipe: (event: SwiperClass) => void
  onBullet: (value: number) => void
  bullets: {
    bg: string
    amount: number
  }
}

export interface ConsumerFC extends ReactFC<PropsWithChildren<{ Component: StyledComponent<any> }>> {}

export interface FC<P> extends ReactFC<PropsWithChildren<P>> {
  Content: ReactFC<ContentProps & PropsWithChildren<HTMLAttributes<HTMLDivElement>>>
  Image: ReactFC<ImageProps & PropsWithChildren<HTMLAttributes<HTMLImageElement>>>
  Container: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Heading: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Topic: ReactFC<PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>>
  Description: ReactFC<PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>>
  Swiper: ReactFC<SwiperProps & PropsWithChildren<HTMLAttributes<HTMLDivElement>>>
}
