import { combineEpics } from 'redux-observable'
import { epic as fetchEpic } from '~/fetch'
import { epic as es_queryEpic } from '~/es_query'


export default combineEpics(
  fetchEpic,
  es_queryEpic,
)
