import { forEach } from 'lodash'
export const START_REQUEST = 'fetch/START_REQUEST'
export const RESPONSE_RECEIVED = 'fetch/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => {
  var array = []
  console.log('in responseReceived, response:' );
  console.log(response)
//  console.log(response);
  forEach(response, function(item){
    console.log(item._source.mem);
     array.push(item._source.mem)
  })
  console.log(array);
  return {
    type: RESPONSE_RECEIVED,
    data: array,
  }
}
export default startRequest
