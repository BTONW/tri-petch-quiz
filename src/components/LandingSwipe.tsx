import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react'
import { Children, isValidElement, createContext, useState, useContext, useEffect } from 'react'

import { Theme } from '@/src/types/constants/styles'
import { FC, ConsumerFC, Props, ContentProps, ImageProps, SwiperProps } from '@/src/types/components/LandingSwipe'

const getMargin = (position: Props['position']) => position === 'left'
  ? css`
      margin-top: 0;
      margin-bottom: 0;
      margin-left: auto;
      margin-right: 0;
    `
  : css`margin: 0;`

// @emotion styled ------------------

const Content = styled('div')<ContentProps>`
  height: 100%;
  display: flex;

  ${({ color, theme, position, pb }) => css`
    background-color: ${theme.colors.bg[color]};
    padding: 60px 0 ${typeof pb !== 'undefined'
      ? pb
      : 60
    }px;
    justify-content: ${position === 'left'
      ? 'flex-start'
      : 'flex-end'
    };
    color: ${theme.colors.text[
      ['darkBlue', 'purple'].includes(color)
        ? 'white'
        : 'black'
    ]};

    @media screen and (max-width: 1310px) { // tablet
      padding: 30px 0 ${typeof pb !== 'undefined'
        ? pb
        : 30
      }px;
    }

    @media screen and (max-width: 730px) { // mobile
      padding: 60px 20px ${typeof pb !== 'undefined'
        ? pb
        : 0
      }px;
    }
  `}
`

const Image = styled('img')<ImageProps>`
  z-index: 2;
  position: absolute;
  ${({ options, position }) => css`
    content: url(${options.src.desktop});
    width: 50%;
    height: 100%;
    ${position === 'left'
      ? css`
        top: -50px;
        right: 80px;
        
        @media screen and (max-width: 1310px) { // tablet
          content: url(${options.src.tablet});
          right: 0;
        }

        @media screen and (max-width: 730px) { // mobile
          content: url(${options.src.mobile});
          right: 50%;
          top: 100px;
          width: 302px;
          height: 250px;
          transform: translateX(50%);
        }
      `
      : css`
        top: 50px;
        left: 80px;
        
        @media screen and (max-width: 1310px) { // tablet
          content: url(${options.src.tablet});
          left: 0;
        }

        @media screen and (max-width: 730px) { // mobile
          content: url(${options.src.mobile});
          left: 50%;
          top: 100px;
          width: 218px;
          height: 281px;
          transform: translateX(-50%);
        }
      `
    }
  `};
`

const Container = styled('div')`
  width: 50%;
  @media screen and (max-width: 1310px) { // tablet
    width: 55%;
  }
  @media screen and (max-width: 730px) { // mobile
    width: 100%;
  }
`

const Heading = styled('h1')<Props>`
  width: 85%;
  max-width: 700px;
  font-size: 90px;
  font-weight: 400;
  line-height: 105.47px;
  padding: 40px 0 0;
  color: ${({ theme }) => theme.colors.text.grayPrimary};
  ${({ position }) => getMargin(position)}

  @media screen and (max-width: 730px) { // mobile
    width: 100%;
    max-width: unset;
    height: ${({ position }) => position === 'left' ? '300px' : '320px'};
    font-size: 50px;
    line-height: 58.59px;
    padding: 20px 0 0;
  }
`

const Topic = styled('div')<Props>`
  display: flex;
  align-items: center;
  width: 85%;
  max-width: 700px;
  font-size: 36px;
  font-weight: 400;
  line-height: 42.19px;
  padding-bottom: 20px;
  letter-spacing: 1.5px;
  color: ${({ theme }) =>  theme.colors.text.graySecondary};
  ${({ position }) => getMargin(position)}

  .seq {
    font-size: 18px;
    font-weight: 400;
    line-height: 21.09px;
    letter-spacing: 1.5px;
    margin-right: 10px;
    .underline {
      height: 5px;
      width: 100%;
      margin-top: 3px;
      border-radius: 5px;
    }
  }

  ${({ theme }) =>
    (Object.keys(theme.colors.bg) as Array<keyof Theme['colors']['bg']>).map(key => css`
      &.${key} {
        .seq {
          color: ${['white', 'gray', 'purple'].includes(key)
            ? theme.colors.text.black
            : theme.colors.text.purple
          };
          .underline {
            background-color: ${['white', 'gray'].includes(key)
              ? theme.colors.underline.purple
              : theme.colors.underline.white
            }
          }
        }
        @media screen and (max-width: 730px) { // mobile
          .seq {
            color: ${theme.colors.text.black};
            .underline {
              background-color: ${theme.colors.underline.purple};
            }
          }
        }
      }
    `)
  }

  @media screen and (max-width: 730px) { // mobile
    width: 100%;
    max-width: unset;
    font-size: 28px;
    line-height: 32.81px;
    padding-bottom: 10px;

    .seq {
      font-size: 14px;
      line-height: 16.14px;
      .underline {
        height: 4px;
        width: 100%;
        margin-top: 2px;
        border-radius: 4px;
      }
    }
  }
`

const Description = styled('p')<Props>`
  margin: 0;
  width: 85%;
  max-width: 700px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  ${({ position }) => getMargin(position)}

  @media screen and (max-width: 730px) { // mobile
    width: 100%;
    max-width: unset;
    font-size: 15px;
    line-height: 17.58px;
  }
`

const WrapperBullet = styled('div')<Pick<SwiperProps, 'bullets'>>`
  display: flex;
  padding: 25px 0;
  justify-content: center;
  background-color: ${({ bullets }) => bullets.bg};
`

const Bullets = styled('div')<{ isActive?: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 6px;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) => isActive
    ? theme.colors.bullets.active
    : theme.colors.bullets.inActive
  };
`

const Wrapper = styled('div')`
  position: relative;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    height: auto !important;
  }

  .swiper-content {
    height: 100% !important
  }
`

// react context ------------------

const Context = createContext<Props>({
  position: 'left'
})

// component LandingSwipe ----------

const Consumer: ConsumerFC = ({
  children,
  Component,
  ...props
}) => {
  const ctx = useContext(Context)
  return (
    <Component {...ctx} {...props}>{children}</Component>
  )
}

const LandingSwipe: FC<Props> = ({ children, ...props }) => {
  return (
    <Context.Provider value={props}>
      <Wrapper>{children}</Wrapper>
    </Context.Provider>
  )
}

LandingSwipe.Swiper = ({
  active,
  isSwipe,
  bullets,
  children,
  onSwipe,
  onBullet
}) => {
  const [pagiante, setPaginate] = useState<number[]>([])
  const [swiper, setSwiper] = useState<SwiperClass>()

  const handleOnSetSwiper = () => {
    if (swiper) {
      swiper.slideTo(active)
    }
  }

  useEffect(() => {
    handleOnSetSwiper()
  }, [active, swiper])

  useEffect(() => {
    const items = []
    for (let i = 0; i < bullets.amount; i++) {
      items.push(i)
    }
    setPaginate(items)
  }, [bullets])
  
  return isSwipe ? (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={onSwipe}
      >
        {
          Children.map(children, child => {
            if (isValidElement(child)) {
              return (
                <SwiperSlide key={child.key}>{child}</SwiperSlide>
              )
            }
            return child
          })
        }
      </Swiper>
      <WrapperBullet bullets={bullets}>
        {
          pagiante.map((val) => (
            <Bullets
              key={val}
              isActive={val === active}
              onClick={() => onBullet(val)}
            />
          ))
        }
      </WrapperBullet>
    </>
  ) : children
}

LandingSwipe.Content = props => Consumer({ ...props, Component: Content })

LandingSwipe.Image = props => Consumer({ ...props, Component: Image })

LandingSwipe.Container = props => Consumer({ ...props, Component: Container })

LandingSwipe.Heading = props => Consumer({ ...props, Component: Heading })

LandingSwipe.Topic = props => Consumer({ ...props, Component: Topic })

LandingSwipe.Description = props => Consumer({ ...props, Component: Description })

export default LandingSwipe