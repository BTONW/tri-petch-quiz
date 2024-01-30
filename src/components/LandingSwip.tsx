import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { FC, PropsWithChildren } from 'react'
import { Props } from '@/src/types/components/LandingSwip'

const Wrapper = styled('div')<Props>`
  .content {
    display: flex;
    justify-content: ${({ position }) => position === 'left'
      ? 'flex-start'
      : 'flex-end'
    };
    ${({ theme }) =>  css`
      &.gray { background-color: ${theme.colors.bg.gray}; }
      &.white { background-color: ${theme.colors.bg.white}; }
      &.purple { background-color: ${theme.colors.bg.purple}; }
      &.darkBlue { background-color: ${theme.colors.bg.darkBlue}; }
    `}

    & > .container {
      width: 50%;
    }
  }
`

const Paragrahp: FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>{children}</Wrapper>
  )
}

export default Paragrahp