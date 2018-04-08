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
export default ({ startRequest, loading, data }) =>
<div>
    <button onClick={startRequest}>Fetch Data</button>
      { loading ? <div>Loading...</div> : <div>Press the button</div>}
  <Grid
     rows={data ? data : []}
    columns={[
      { name: '_index', title: 'User ID' },
    ]}>
    <Table />
    <TableHeaderRow />
  </Grid>
</div>
