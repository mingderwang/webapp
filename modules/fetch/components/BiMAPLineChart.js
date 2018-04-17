import {Line} from 'react-chartjs-2';

export default ({ startRequest, loading, data, hostNode}) =>
<div>
  <button onClick={startRequest}>資料重抓</button>
    { loading ? <div>下載中 ...</div> : <div>(如果需要的話)</div>}
  <h2>[{hostNode}] Memory</h2>
  <Line data={data ? data : []} />
</div>
