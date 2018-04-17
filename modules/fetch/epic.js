import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/exhaustMap'
import Promise from 'bluebird'
import Rx from 'rxjs'
import elasticsearch from 'elasticsearch'
import { START_REQUEST, responseReceived } from './actions'
import esb from 'elastic-builder'

const indexName = "linuxtop-*"
const hostName = 'b44.vrecle.com:9200'
const logLevel = 'info'
const protocolType = 'http'
const { getStore } = '~/redux-config'

const requestBody = esb.requestBodySearch()
    .query(
        esb.boolQuery()
           .must(esb.termQuery('host', 'amd72'))
           .must(esb.rangeQuery('@timestamp').gte('2011-05-01').lt('2013-05-03'))
           .filter(esb.termQuery('style', 'topsys'))
    ).from(0)
    .size(1440);

const client = new elasticsearch.Client({
  protocol: protocolType,
  host: hostName, // CORS issue for localhost dev ENV is not working.
  log: logLevel
});

function ping () {
  return client.ping({
  requestTimeout: 3000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
}

const request$ = Rx.Observable.fromPromise(client.search({
  index: indexName,
  body: requestBody.toJSON()
}))
  .map(data => data.hits.hits)

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
