import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/exhaustMap'

import { START_REQUEST, responseReceived } from './actions'
const iniData = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [10, 3, 20],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const request$ = Observable
  .ajax({ url: 'https://jsonplaceholder.typicode.com/posts' })
  .map(x => ({
    labels: [
      'Red',
      'Green',
      'Yellow'
    ],
    datasets: [{
      data: [x.response[0].id, x.response[1].id, x.response[2].id],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }]
  }) )
//  .map(x => {console.log(x)  console.log(iniData)})

export default action$ =>
  action$.filter(action => action.type === START_REQUEST)
    .exhaustMap(() => request$)
    .map(responseReceived)
