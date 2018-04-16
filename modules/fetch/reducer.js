/* eslint-disable fp/no-nil */
import { START_REQUEST, RESPONSE_RECEIVED } from './actions'
import { forEach } from 'lodash'

export default (state = { loading: false }, action) => {
  switch (action.type) {
    case START_REQUEST: return { loading: true }
    case RESPONSE_RECEIVED: {
      var newData = action.data
    return { loading: false, data:{
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: newData
        }
      ]
    } }
  }
    default: return state
  }
}
