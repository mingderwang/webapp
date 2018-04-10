import React from 'react'
import Link from 'next/link'
var elasticsearch = require('elasticsearch');
var Promise = require('bluebird');

export default class MyPage extends React.Component {
  static async getInitialProps () {
    return { stars: getData(this)}
  }

  render () {
    return (
      <div>
        <p>Next.js has {this.props.stars} ⭐️</p>
        <Link prefetch href='/preact'><a>How about preact?</a></Link>
      </div>
    )
  }
}

const getData = () => {
    // eslint-disable-next-line no-undef
    const esb = require('elastic-builder'); // the builder

    const requestBody = esb.requestBodySearch()
      .query(esb.matchAllQuery().boost(1.2));

    var log = console.log.bind(console);

var client = new elasticsearch.Client({
  host: 'secure.eth.cards:9200',
  log: 'trace'
});

function dropIndex() {
  return client.indices.delete({
    index: 'ming-test',
  });
}

function createIndex() {
  return client.indices.create({
    index: 'ming-test',
    mapping: {
      house: {
        name: {
          type: 'string'
        }
      }
    }
  });
}

function addToIndex() {
  return client.index({
    index: 'ming-test',
    type: 'house',
    id: '1',
    body: {
      name: 'huhu'
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

function getFromIndex() {
  return client.get({
    id: 1,
    index: 'ming-test',
    type: 'house',
  }).then(log);

}

function waitForIndexing() {
  log('Wait for indexing ....');
  return new Promise(function(resolve) {
    setTimeout(resolve, 2000);
  });
}

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

Promise.resolve()
.then(ping)
.then(search)
.then(closeConnection)
}
