import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FC as ReactFC, PropsWithChildren, createContext, useContext } from 'react'

import { Theme } from '@/src/types/constants/styles'
import { FC, Props } from '@/src/types/components/LandingSwip'

// @emotion styled ------------------

const Content = styled('div')<Props>`
  position: relative;
  display: flex;
  padding: 60px 0;
  ${({ position }) => css`
    justify-content: ${position === 'left' ? 'flex-start' : 'flex-end'};
  `}

  ${({ theme }) =>
    (Object.keys(theme.colors.bg) as Array<keyof Theme['colors']['bg']>).map(key => css`
      &.${key} {
        background-color: ${theme.colors.bg[key]};

        ${['darkBlue', 'purple'].includes(key)
          ? css`color: ${theme.colors.text.white};`
          : ''
        }
      }
    `)
  }
`

const Container = styled('div')`
  width: 50%;
`

const Heading = styled('h1')<Props>`
  width: 85%;
  max-width: 700px;
  font-size: 90px;
  font-weight: 400;
  line-height: 100px;
  color: ${({ theme }) => theme.colors.text.grayPrimary};
  padding: 40px 0 0;
  ${({ position }) => position === 'left'
    ? css`margin-left: auto;`
    : css`margin: 0;`
  }
`

const Topic = styled('div')<Props>`
  display: flex;
  align-items: center;
  width: 85%;
  max-width: 700px;
  font-size: 36px;
  line-height: 42px;
  padding-bottom: 30px;
  letter-spacing: 1.5px;
  color: ${({ theme }) =>  theme.colors.text.graySecondary};
  ${({ position }) => position === 'left'
    ? css`margin-left: auto;`
    : css`margin: 0;`
  }

  .seq {
    font-size: 18px;
    line-height: 21px;
    margin-right: 15px;
    letter-spacing: 1.5px;
    .underline {
      height: 5px;
      width: 100%;
      margin-top: 5px;
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
  ${({ position }) => position === 'left'
    ? css`margin-left: auto;`
    : css`margin: 0;`
  }
`

// react context ------------------

const Context = createContext<Props>({
  position: 'left'
})

// component LandingSwip ----------

const hooks: ReactFC<PropsWithChildren> = ({ children, ...props }, Component) => {
  const ctx = useContext(Context)
  return (
    <Component {...ctx} {...props}>{children}</Component>
  )
}

const LandingSwip: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <Context.Provider value={props}>
      {children}
    </Context.Provider>
  )
}

LandingSwip.Content = (props) => hooks(props, Content)

LandingSwip.Container = Container

LandingSwip.Heading = (props) => hooks(props, Heading)

LandingSwip.Topic = (props) => hooks(props, Topic)

LandingSwip.Description = (props) => hooks(props, Description)


export default LandingSwip