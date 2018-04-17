/* eslint-disable fp/no-nil */
import { START_REQUEST, RESPONSE_RECEIVED } from './actions'
import { forEach } from 'lodash'
import { DateTime } from 'luxon';

export default (state = { loading: false }, action) => {
  var timeList = []
  for (var i = 0; i<100; i++) {
    timeList.push(DateTime.local(2017, 5, 15, 0, 0).plus({minutes: 5*i}).toFormat('hh:mm'))
  }
  console.log(timeList);
  switch (action.type) {
    case START_REQUEST: return { loading: true }
    case RESPONSE_RECEIVED: {
    return { loading: false, data:{
      labels: timeList,
      datasets: [
        {
          label: 'memfree',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,0,192,0.4)',
          borderColor: 'rgba(75,0,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,0,192,1)',
          pointHoverBorderColor: 'rgba(220,0,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: action.data
        },
        {
          label: 'memtotal',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(0,0,192,0.4)',
          borderColor: 'rgba(0,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,0,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(0,192,192,1)',
          pointHoverBorderColor: 'rgba(220,0,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: action.data2
        },
        {
          label: 'memused',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,0,0.4)',
          borderColor: 'rgba(75,192,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,0,1)',
          pointHoverBorderColor: 'rgba(220,220,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: action.data3
        }
      ]
    } }
  }
    default: return state
  }
}
