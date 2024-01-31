import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FC as ReactFC, PropsWithChildren, ReactNode, createContext, useContext } from 'react'

import { Theme } from '@/src/types/constants/styles'
import { FC, Props } from '@/src/types/components/LandingSwip'

// @emotion styled ------------------

const Content = styled('div')<Props>`
  display: flex;
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
  margin: 60px 0;
`

const Heading = styled('h1')<Props>`
  width: 85%;
  max-width: 700px;
  font-size: 90px;
  font-weight: 400;
  line-height: 100px;
  color: ${({ theme }) => theme.colors.text.grayPrimary};
  ${({ position }) => position === 'left'
    ? css`margin-left: auto;`
    : css`margin: 0;`
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

LandingSwip.Description = (props) => hooks(props, Description)


export default LandingSwip