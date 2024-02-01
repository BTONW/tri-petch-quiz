import { FC, useState } from 'react'
import useWindowDimensions from '@/src/hooks/useWindowDimensions'
import LandingSwipe from '@/src/components/LandingSwipe'

import data from './data'
import { DataLanding } from '@/src/types/modules/home'
import { theme } from '@/src/constants/styles'

const ViewComponent: FC = () => {
  const [athlets, setAthlets] = useState(1)
  const [players, setPlayers] = useState(0)

  const { isMobile } = useWindowDimensions()

  const handleGetSwipe = ({ key }: DataLanding ) => {
    switch (key) {
      case 'ATHLETS':
        return athlets
      case 'PLAYERS':
        return players
    }
  }

  const handleChangeSwipe = ({ key }: DataLanding, val: number) => {
    switch (key) {
      case 'ATHLETS':
        setAthlets(val)
        break
      case 'PLAYERS':
        setPlayers(val)
        break
    }
  }

  return (
    <>
      {
        data.map((val, idx) => (
          <LandingSwipe key={idx} position={val.position}>
            <LandingSwipe.Image options={val.imageOptions} />
            {
              val.items.filter(item => item.heading).map(item => (
                <LandingSwipe.Content
                  key={item.key}
                  color={item.color}
                  pb={item.contentPb}
                  className={isMobile ? 'pt-0' : ''}
                >
                  <LandingSwipe.Container>
                    <LandingSwipe.Heading>{item.heading}</LandingSwipe.Heading>
                  </LandingSwipe.Container>
                </LandingSwipe.Content>
              ))
            }
            <LandingSwipe.Swiper
              isSwipe={isMobile}
              active={handleGetSwipe(val) as number}
              onSwipe={e => handleChangeSwipe(val, e.activeIndex)}
              onBullet={activeId => handleChangeSwipe(val, activeId)}
              bullets={{
                bg: theme.colors.bg.gray,
                amount: val.items.filter(item => !item.heading).length
              }}
            >
              {
                val.items.filter(item => !item.heading).map(item => (
                  <LandingSwipe.Content
                    key={item.key}
                    pb={item.contentPb}
                    color={isMobile ? 'gray' : item.color}
                  >
                    <LandingSwipe.Container>
                      {item.topic && (
                        <LandingSwipe.Topic className={item.color}>
                          <span className='seq'>
                            {item.topicSeq}
                            <div className='underline' />
                          </span>
                          {item.topic}
                        </LandingSwipe.Topic>
                      )}
                      {item.description && (
                        <LandingSwipe.Description>{item.description}</LandingSwipe.Description>
                      )}
                    </LandingSwipe.Container>
                  </LandingSwipe.Content>
                ))
              }
            </LandingSwipe.Swiper>
          </LandingSwipe>
        ))
      }
    </>
  )
}

export default ViewComponent
