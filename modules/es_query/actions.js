import { forEach } from 'lodash'
export const START_REQUEST = 'es_query/START_REQUEST'
export const RESPONSE_RECEIVED = 'es_query/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => {
  var array = []
  console.log('in responseReceived, response:');
//  console.log(response);
  forEach(response, function(item){
    console.log(item.key);
     array.push([item.key, item.doc_count])
  })
  console.log(array);
  return {
    type: RESPONSE_RECEIVED,
    data: array,
  }
}
