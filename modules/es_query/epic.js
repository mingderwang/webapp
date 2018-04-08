
import  {ofType} from 'redux-observable-adapter-most';
import { map, filter, debounce, skipRepeats, switchLatest, fromPromise, merge } from 'most'

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
})
}

function closeConnection() {
  client.close();
}

export default action$ =>
  action$
    .filter(ofType(START_REQUEST))
    .map(()=>Promise.resolve('yes'))
