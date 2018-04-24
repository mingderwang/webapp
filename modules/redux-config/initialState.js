// this initial state is used for server-side rendering as well
import { initialState as counter } from '~/counter'
import { initialState as todoapp } from '~/todoapp'
import { initialState as pickTimePeriod } from '~/pickTimePeriod'

// merge all initial states and export
export default Object.assign({},
  counter,
  todoapp,
  pickTimePeriod,
)
