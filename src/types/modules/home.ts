import { Props } from '@/src/types/components/LandingSwip'
import { Theme } from '@/src/types/constants/styles'

export interface DataItemLanding {
  key: string
  color: keyof Theme['colors']['bg']
  topic?: string
  topicSeq?: string
  heading?: string
  contentPb?: number
  description?: string
}

export interface DataLanding {
  key: string
  position: Props['position']
  items: DataItemLanding[]
}