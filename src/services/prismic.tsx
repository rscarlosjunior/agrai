// import {
//   GetPrismicByQuery,
//   GetPrismicByQueryResponse
// } from '@/types/IProduct.interface'
// import Prismic from '@prismicio/client'
// import { useState } from 'react'

// export const usePrismicService = () => {
//   const [ results, setResults] = useState()
//   const getPrismicClient = (req?: unknown) => {
//     const prismic = Prismic.client(process.env.PRISMIC_ENDPOINT, {
//       req,
//       accessToken: process.env.PRISMIC_ACCESS_TOKEN
//     })
//     return prismic
//   }
//   const getPrismicByQuery: GetPrismicByQuery = async () => {
//     const service = getPrismicClient()
//     const result = (await service.query([
//       Prismic.predicates.any('document.type', ['slogan','howitworks'])
//     ])) as unknown as GetPrismicByQueryResponse
//     return result
//   }

//   const handlePrismicByQuery = async () => {
//     const res = await getPrismicByQuery()
//     if(!res) return null
//     getResultsData(res.results)
//   }

//   const getResultsData = (res: any[]) => {
//     let array = []
//     res.forEach(element => {
//       const formattingResponse = {
//         id: element.uid,
//         type: element.type,
//         data: element.data
//       }
//       array.push(formattingResponse)
//     });
//     setResults(array)
//   }
  
//   return {
//     results,
//     getPrismicClient,
//     getPrismicByQuery,
//     handlePrismicByQuery,

//   }
// }
