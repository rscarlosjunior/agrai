import { useContext } from 'react'
import { ContentContext } from '@/context/content'

export const usePrismic = () => useContext(ContentContext)