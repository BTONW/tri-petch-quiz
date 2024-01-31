'use client'

import { FC, PropsWithChildren } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Roboto } from 'next/font/google'

import styles from '@/src/styles/global'
import { theme } from '@/src/constants/styles'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <html lang='en'>
        <title>tri-petch-quiz</title>
        <body className={roboto.className}>{children}</body>
      </html>
    </ThemeProvider>
  )
}

export default RootLayout