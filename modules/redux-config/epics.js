import { combineEpics } from 'redux-observable'
import { epic as hostlistEpic } from '~/hostlist'
import { epic as fetchEpic } from '~/fetch'

export default combineEpics(
  hostlistEpic,
  fetchEpic
)
