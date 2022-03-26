import axios from 'axios'
export const Lead = (userParams: any) => {
    console.log(userParams)
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept': 'application/json',
      'api-token':
        '93dd8831a9a9e5763432e625c76ec48b78d0349d4c4b92e0917aaebc59cb7d5d33d71edf',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Accept'
    }
  }

  axios
    .post(
      'https://agraiflv.api-us1.com/api/1/contacts',
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
