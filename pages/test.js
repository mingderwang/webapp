'use strict';

import React from 'react'
import Link from 'next/link'
import 'isomorphic-unfetch'
import Rx from 'rxjs/Rx';

var USER_REQUEST = 'USER_REQUEST';
var VALIDATION = 'VALIDATION';
var SUCCESS = 'SUCCESS';
var RECEIVE_POSTS = 'RECEIVE_POSTS';
var ABORT_GET_POSTS = 'ABORT_GET_POSTS';

var mockAjax = function mockAjax() {
  return Promise.resolve({ posts: [4, 5, 6, 7] });
};

var fetchPost = function fetchPost(action$) {
  return Rx.Observable.fromPromise(mockAjax()).map(function (_ref) {
    var posts = _ref.posts;
    return { type: RECEIVE_POSTS, posts: posts };
  }).takeUntil(action$.ofType(ABORT_GET_POSTS));
};

console.log(Rx.Observable.of(1,2,3))
console.log(Rx.Observable.fromPromise(mockAjax()))

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
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
