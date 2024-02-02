'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'

const ViewComponent = dynamic(() => import('../src/modules/home'), { ssr: false })


const Page: FC = () => {
  return (
    <ViewComponent />
  )
}

export default Page