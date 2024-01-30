'use client'

import { FC, ReactNode } from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { Roboto } from 'next/font/google'

import styles, { theme } from '@/src/styles/global'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
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