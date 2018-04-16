import { forEach } from 'lodash'
export const START_REQUEST = 'fetch/START_REQUEST'
export const RESPONSE_RECEIVED = 'fetch/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => {
  var array = []
  var array2 = []
  var array3 = []
  console.log('in responseReceived, response:' );
  console.log(response)
//  console.log(response);
  forEach(response, function(item){
    console.log(item._source.memfree);
     array.push(item._source.memfree);
     array2.push(item._source.memtotal);
     array3.push(item._source.memused);
  })
  console.log(array);
  return {
    type: RESPONSE_RECEIVED,
    data: array,
    data2: array2,
    data3: array3
  }
}
export default startRequest
