import { combineReducers } from 'redux'
import { reducer as counter } from '~/counter'
import { reducer as todoapp } from '~/todoapp'
import { reducer as hostlist } from '~/hostlist'
import { reducer as fetch } from '~/fetch'
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  counter,
  todoapp,
  hostlist,
  fetch,
  form: reduxFormReducer,// mounted under "form"
})
