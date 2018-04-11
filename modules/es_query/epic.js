import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/exhaustMap'
import Promise from 'bluebird'
import Rx from 'rxjs'

var elasticsearch = require('elasticsearch');

import { START_REQUEST, responseReceived } from './actions'
// eslint-disable-next-line no-undef

const esb = require('elastic-builder'); // the builder

const requestBody = esb.requestBodySearch()
    .agg(esb.termsAggregation('host_terms', 'host.keyword'));


var log = console.log.bind(console);
const client = new elasticsearch.Client({
  protocol: 'http',
  host: 'b44.vrecle.com:9200', // CORS issue for localhost dev ENV is not working.
  log: 'trace'
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
  index: "linuxtop-*",
  body: requestBody.toJSON()
}))
  .map(data => data.aggregations.host_terms.buckets)

export default  action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
