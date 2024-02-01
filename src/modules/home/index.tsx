import { FC } from 'react'
import LandingSwip from '@/src/components/LandingSwip'

import data from './data'

const ViewComponent: FC = () => {
  return (
    <>
      {
        data.map((val, idx) => (
          <LandingSwip key={idx} position={val.position}>
            <LandingSwip.Image options={val.imageOptions} />
            {
              val.items.map(item => (
                <LandingSwip.Content key={item.key} color={item.color} pb={item.contentPb}>
                  <LandingSwip.Container>
                    {item.heading && (
                      <LandingSwip.Heading>{item.heading}</LandingSwip.Heading>
                    )}
                    {item.topic && (
                      <LandingSwip.Topic className={item.color}>
                        <span className='seq'>
                          {item.topicSeq}
                          <div className='underline' />
                        </span>
                        {item.topic}
                      </LandingSwip.Topic>
                    )}
                    {item.description && (
                      <LandingSwip.Description>{item.description}</LandingSwip.Description>
                    )}
                  </LandingSwip.Container>
                </LandingSwip.Content>
              ))
            }
          </LandingSwip>
        ))
      }
    </>
  )
}

export default ViewComponent
