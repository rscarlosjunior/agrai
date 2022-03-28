import axios from 'axios'
export const Lead = (userParams: any) => {

   let axiosConfig = {
    headers: {
      'api-token':
        '93dd8831a9a9e5763432e625c76ec48b78d0349d4c4b92e0917aaebc59cb7d5d33d71edf',
    }
  }

  axios
    .post(
      'https://agraiflv.api-us1.com/api/3/contacts',
      userParams,
      axiosConfig
    )
    .then((res) => {
      console.log('RESPONSE RECEIVED: ', res)
    })
    .catch((err) => {
      console.log('AXIOS ERROR: ', err)
    })
}
