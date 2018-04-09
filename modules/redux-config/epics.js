import { combineEpics } from 'redux-observable'
import { epic as es_queryEpic } from '~/es_query'
import { epic as fetchEpic } from '~/fetch'

export default combineEpics(
  es_queryEpic,
  fetchEpic
)
