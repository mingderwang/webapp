import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'
import { reducer as hostlist } from '~/hostlist'
import { reducer as fetch } from '~/fetch'

export default combineReducers({
  counter,
  todoapp,
  hostlist,
  fetch,
})
