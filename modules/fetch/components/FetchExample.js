/* eslint-disable fp/no-nil */
/*
const prettyJSON = obj => JSON.stringify(obj, null, '\t')

export default ({ startRequest, loading, data }) =>
  <div>
    <button onClick={startRequest}>Fetch Data</button>
    { loading ? <div>Loading...</div> : <div>Press the button</div>}
    { data ? <pre>{prettyJSON(data)}</pre> : '' }
  </div>

*/
import {Doughnut} from 'react-chartjs-2';

import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
const prettyJSON = obj => JSON.stringify(obj, null, '\t')
/*or '@devexpress/dx-react-grid-bootstrap4'
  or '@devexpress/dx-react-grid-bootstrap3'*/

/*
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
},
*/
const iniData = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [10, 3, 1],
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

export default ({ startRequest, loading, data, data2 }) =>
<div>
    <button onClick={startRequest}>Fetch Data</button>
      { loading ? <div>Loading...</div> : <div>Press the button</div>}
  <Doughnut data={data2 ? data2 : iniData} />
</div>
