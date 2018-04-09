
import  {ofType} from 'redux-observable-adapter-most';
import { map, filter, debounce, skipRepeats, switchLatest, fromPromise, forEach } from 'most'

var elasticsearch = require('elasticsearch');

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

import Rx from 'rxjs/Rx';
var USER_REQUEST = 'USER_REQUEST';
var VALIDATION = 'VALIDATION';
var SUCCESS = 'SUCCESS';
var RECEIVE_POSTS = 'RECEIVE_POSTS';
var RECEIVE_POSTS2 = 'RECEIVE_POSTS2';
var ABORT_GET_POSTS = 'ABORT_GET_POSTS';
const mockAjax = () => Promise.resolve({data: [4, 5, 6, 7]});

const fetchPost = (action$) => Rx.Observable.fromPromise(mockAjax())
  .map(responseReceived)

const defaultPosts = (action$, store) => Rx.Observable.of({type: RECEIVE_POSTS2, posts: store.getState().items});


export default (action$, store) =>
action$.ofType(START_REQUEST).mergeMap(function () {
return Rx.Observable['if'](function () {
  return store.getState();
}, fetchPost(action$), defaultPosts(action$, store))['do'](function (x) {
  return console.log(x);
});
});
