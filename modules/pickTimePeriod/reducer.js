//
//import { reducer as reduxFormReducer } from 'redux-form';
//form: reduxFormReducer,// mounted under "form"
import { START_REQUEST, RESPONSE_RECEIVED } from './actions'

export default (state = { count: 0 }, action) => {
  switch (action.type) {
    case START_REQUEST: return { count: state.count + 1 }
    case RESPONSE_RECEIVED: return { count: state.count - 1 }
    default: return state
  }
}
