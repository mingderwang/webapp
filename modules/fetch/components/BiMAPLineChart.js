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
import {Line} from 'react-chartjs-2';

export default ({ startRequest, loading, data, hostNode}) =>
<div>
    <button onClick={startRequest}>Fetch Data</button>
      { loading ? <div>Loading...</div> : <div>Press the button</div>}
  <h2>[{hostNode}] Memory</h2>
<Line data={data ? data : []} />
</div>
