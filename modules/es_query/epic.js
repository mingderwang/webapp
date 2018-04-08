import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/exhaustMap'
import 'isomorphic-unfetch'

var elasticsearch = require('elasticsearch');
var Promise = require('bluebird');

import { START_REQUEST, responseReceived } from './actions'
// eslint-disable-next-line no-undef
const esb = require('elastic-builder'); // the builder

const requestBody = esb.requestBodySearch()
  .query(esb.matchAllQuery().boost(1.2));

var log = console.log.bind(console);
const client = new elasticsearch.Client({
  host: 'secure.eth.cards:9200',
  log: 'trace'
});

function ping () {
  return client.ping({
  requestTimeout: 30000,
}, function (error) {
  if (error) {
    console.error('elasticsearch cluster is down!');
  } else {
    console.log('All is well');
  }
});
}

function search() {
return client.search({
  index: "elastalert_status",
  body: requestBody.toJSON()
}).then(function (body) {
  return body.hits.hits;
}).then(log);
}

function closeConnection() {
  client.close();
}

const request$ = Observable
  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts' })
  .map(data => data.response)

//  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts' })
/* Promise.resolve()
    .then(ping)
    .then(search)
    .then(closeConnection)
    .map(data => data.response)
*/

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
