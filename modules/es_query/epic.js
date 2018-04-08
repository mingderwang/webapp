
import  {ofType} from 'redux-observable-adapter-most';
import { map, filter, debounce, skipRepeats, switchLatest, fromPromise, forEach } from 'most'

var elasticsearch = require('elasticsearch');
var Promise = require('bluebird');

import { START_REQUEST, responseReceived } from './actions'
// eslint-disable-next-line no-undef

const fetchData = () => {
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
  var hits = body.hits.hits;
}, function (error) {
  console.trace(error.message);
})
}

function closeConnection() {
  client.close();
}

return Promise.resolve().then(search)
}

export default action$ =>
    action$
      .filter(action => action.type === START_REQUEST)
      .map(fromPromise(fetchData()))
      
