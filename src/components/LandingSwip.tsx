import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { createContext, useContext } from 'react'

import { Theme } from '@/src/types/constants/styles'
import { FC, ConsumerFC, Props, ContentProps } from '@/src/types/components/LandingSwip'

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
  display: flex;
  position: relative;
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
  `}
`

const Container = styled('div')`
  width: 50%;
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
      }
    `)
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
`

// react context ------------------

const Context = createContext<Props>({
  position: 'left'
})

// component LandingSwip ----------

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

const LandingSwip: FC<Props> = ({ children, ...props }) => {
  return (
    <Context.Provider value={props}>
      {children}
    </Context.Provider>
  )
}

LandingSwip.Content = props => Consumer({ ...props, Component: Content })

LandingSwip.Container = props => Consumer({ ...props, Component: Container })

LandingSwip.Heading = props => Consumer({ ...props, Component: Heading })

LandingSwip.Topic = props => Consumer({ ...props, Component: Topic })

LandingSwip.Description = props => Consumer({ ...props, Component: Description })

LandingSwip.defaultProps = {
  position: 'left'
}


export default LandingSwip