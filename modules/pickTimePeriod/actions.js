// constants
export const START_REQUEST = 'pickTime/START_REQUEST'
export const RESPONSE_RECEIVED = 'pickTime/RESPONSE_RECEIVED'

// action creators
export const startRequest = () => ({ type: START_REQUEST })
export const responseReceived = response => ({
  type: RESPONSE_RECEIVED,
  data: response,
  data2: response,
})
