import fetchActions from './actions'
import fetchReducer from './reducer'
import Container from './containers/BiMAPLineChart'
import fetchEpic from './epic'

export const actions = fetchActions
export const reducer = fetchReducer
export const BiMAPLineChart = Container
export const epic = fetchEpic
