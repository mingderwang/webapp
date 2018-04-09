
import  {ofType} from 'redux-observable-adapter-most';
import { map, filter, debounce, skipRepeats, switchLatest, fromPromise, forEach } from 'most'
import Promise from 'bluebird'

var elasticsearch = require('elasticsearch');

import { START_REQUEST, responseReceived } from './actions'
// eslint-disable-next-line no-undef

const esb = require('elastic-builder'); // the builder

const requestBody = esb.requestBodySearch()
  .query(esb.matchAllQuery().boost(1.2));

var log = console.log.bind(console);
const client = new elasticsearch.Client({
  protocol: 'http',
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

const fetchData = () => {
  console.log('ming-start-fetchData')
  return Promise.resolve().then(ping).then(search).then(closeConnection)
}

import Rx from 'rxjs/Rx';
var USER_REQUEST = 'USER_REQUEST';
var VALIDATION = 'VALIDATION';
var SUCCESS = 'SUCCESS';
var RECEIVE_POSTS = 'RECEIVE_POSTS';
var RECEIVE_POSTS2 = 'RECEIVE_POSTS2';
var ABORT_GET_POSTS = 'ABORT_GET_POSTS';
const mockAjax = () => Promise.resolve({data: [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
  }
]});

const fetchPost = (action$) => Rx.Observable.fromPromise(fetchData()).map(x => console.log(x))
  .map(data => data.data)
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
