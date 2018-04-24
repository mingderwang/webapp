import { combineEpics } from 'redux-observable'
import { epic as hostlistEpic } from '~/hostlist'
import { epic as fetchEpic } from '~/fetch'
//import { epic as pickTimeEpic } from '~/pickTimePeriod'

export default combineEpics(
  hostlistEpic,
  fetchEpic,
)
