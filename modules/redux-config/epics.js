import { combineEpics } from 'redux-observable'
import { epic as es_queryEpic } from '~/es_query'

export default combineEpics(
  es_queryEpic,
)
