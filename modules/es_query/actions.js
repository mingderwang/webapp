export const START_REQUEST = 'es_query/START_REQUEST'
export const RESPONSE_RECEIVED = 'es_query/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => ({
  type: RESPONSE_RECEIVED,
  data: response,
})
