import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'
import { reducer as es_query } from '~/es_query'

export default combineReducers({
  counter,
  todoapp,
  es_query,
})
