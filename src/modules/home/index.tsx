import { FC } from 'react'

import LandingSwip from '@/src/components/LandingSwip'

const ViewComponent: FC = () => {
  return (
    <>
      <LandingSwip position='right'>
        <div className='content white'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
        <div className='content gray'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
        <div className='content purple'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
      </LandingSwip>
      <LandingSwip position='left'>
        <div className='content white'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
        <div className='content gray'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
        <div className='content darkBlue'>
          <div className='container my-3'>
            sssss
          </div>
        </div>
      </LandingSwip>
    </>
  )
}

export default ViewComponent
