import Container from './containers/PickTimePeriod'
import pickTimeActions from './actions'
import pickTimeReducer from './reducer'
import pickTimeEpic from './epic'

export const actions = pickTimeActions
export const reducer = pickTimeReducer
export const PickTimePeriod = Container
export const epic = pickTimeEpic
