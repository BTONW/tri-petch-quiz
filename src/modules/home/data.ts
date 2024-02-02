import { DataLanding } from '@/src/types/modules/home'

const data: DataLanding[] = [
  {
    key: 'ATHLETS',
    position: 'right',
    imageOptions: {
      src: {
        mobile: `${process.env.prefix_url}/athlets-mobile.svg`,
        tablet: `${process.env.prefix_url}/athlets-tablet.svg`,
        desktop: `${process.env.prefix_url}/athlets-desktop.svg`
      },
      size: {
        mobile: { width: 218, height: 281 },
        tablet: { width: 518, height: 719 },
        desktop: { width: 678, height: 950 },
      }
    },
    items: [
      { 
        key: 'ATHLETS_1',
        color: 'white',
        contentPb: 0,
        heading: 'ATHLETS'
      },
      { 
        key: 'ATHLETS_2', 
        color: 'white',
        topic: 'CONNECTION',
        topicSeq: '01',
        description: 'Connect with coaches directly, you can ping coaches to view profile.'
      },
      { 
        key: 'ATHLETS_3', 
        color: 'gray', 
        topic: 'COLLABORATION',
        topicSeq: '02',
        description: 'Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.'
      },
      { 
        key: 'ATHLETS_4', 
        color: 'purple', 
        topic: 'GROWTH',
        topicSeq: '03',
        description: 'Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc '
      },
    ]
  },
  {
    key: 'PLAYERS',
    position: 'left',
    imageOptions: {
      src: {
        mobile: `${process.env.prefix_url}/players-mobile.svg`,
        tablet: `${process.env.prefix_url}/players-tablet.svg`,
        desktop: `${process.env.prefix_url}/players-desktop.svg`
      },
      size: {
        mobile: { width: 218, height: 281 },
        tablet: { width: 518, height: 719 },
        desktop: { width: 678, height: 950 },
      }
    },
    items: [
      { 
        key: 'PLAYERS_1',
        color: 'white',
        contentPb: 0,
        heading: 'PLAYERS'
      },
      { 
        key: 'PLAYERS_2', 
        color: 'white', 
        topic: 'CONNECTION',
        topicSeq: '01',
        description: 'Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.'
      },
      { 
        key: 'PLAYERS_3', 
        color: 'gray',
        topic: 'COLLABORATION',
        topicSeq: '02',
        description: 'Work with recruiter to increase your chances of finding talented athlete.'
      },
      { 
        key: 'PLAYERS_4', 
        color: 'darkBlue',
        topic: 'GROWTH',
        topicSeq: '03',
        description: 'Save your time, recruit proper athlets for your team.'
      },
    ]
  }
]

export default data
