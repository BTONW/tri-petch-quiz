import { FC } from 'react'
import { DataLanding } from '@/src/types/modules/home'
import LandingSwip from '@/src/components/LandingSwip'

const data: DataLanding[] = [
  {
    key: 'ATHLETS',
    position: 'right',
    items: [
      { 
        key: 'ATHLETS_1',
        color: 'white',
        heading: 'ATHLETS'
      },
      { 
        key: 'ATHLETS_2', 
        color: 'white', 
        description: 'Connect with coaches directly, you can ping coaches to view profile.'
      },
      { 
        key: 'ATHLETS_3', 
        color: 'gray', 
        description: 'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
      },
      { 
        key: 'ATHLETS_4', 
        color: 'purple', 
        description: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc '
      },
    ]
  },
  {
    key: 'PLAYERS',
    position: 'left',
    items: [
      { 
        key: 'PLAYERS_1',
        color: 'white',
        heading: 'PLAYERS'
      },
      { 
        key: 'PLAYERS_2', 
        color: 'white', 
        description: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
      },
      { 
        key: 'PLAYERS_3', 
        color: 'gray', 
        description: 'Work with recruiter to increase your chances of finding talented athlete.'
      },
      { 
        key: 'PLAYERS_4', 
        color: 'darkBlue', 
        description: 'Save your time, recruit proper athlets for your team.'
      },
    ]
  }
]

const ViewComponent: FC = () => {
  return (
    <>
      {
        data.map((val, idx) => (
          <LandingSwip key={idx} position={val.position}>
            {
              val.items.map(item => (
                <LandingSwip.Content key={item.key} className={item.color} >
                  <LandingSwip.Container>
                    {item.heading && (
                      <LandingSwip.Heading>{item.heading}</LandingSwip.Heading>
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
