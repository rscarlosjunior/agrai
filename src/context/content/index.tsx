import React, { useState, createContext } from 'react'
import {
  GetPrismicByQuery,
  GetPrismicByQueryResponse
} from '../../types/IProduct.interface'
import Prismic from '@prismicio/client'

export const ContentContext = createContext({
  results: [],
  handlePrismicByQuery: () => {}
})

export const ContentProvider: React.FC = ({ children }) => {
  const [ results, setResults] = useState()

  const getPrismicClient = (req?: unknown) => {
    const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN
    })
    return prismic
  }

  const getPrismicByQuery: GetPrismicByQuery = async () => {
    const service = getPrismicClient()
    const result = (await service.query([
      Prismic.predicates.any('document.type', ['slogan','carousel','agrainum','differentials','testimonials'])
    ])) as unknown as GetPrismicByQueryResponse
    return result
  }

  const handlePrismicByQuery = async () => {
    const res = await getPrismicByQuery()
    if(!res) return null
    getResultsData(res.results)
  }

  const getResultsData = (res: any[]) => {
    let array = []
    res.forEach(element => {
      const formattingResponse = {
        id: element.uid,
        type: element.type,
        data: element.data
      }
      array.push(formattingResponse)
    });
    setResults(array)
  }

  return (
    <ContentContext.Provider
        value={{
            results,
            handlePrismicByQuery
        }}
    >
      {children}
    </ContentContext.Provider>
  )
}