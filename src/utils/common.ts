import { Children, ReactNode } from 'react'

export const useChildren = (children: ReactNode, name: string) =>
  Children.map<any, any>(children, child =>
    child.type.displayName === name ? child : null
  )