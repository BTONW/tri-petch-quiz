import { Props, ImageProps } from '@/src/types/components/LandingSwipe'
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
  imageOptions: ImageProps['options']
  items: DataItemLanding[]
}