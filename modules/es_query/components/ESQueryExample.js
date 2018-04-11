'use strict'

import MUIDataTable from "mui-datatables";

const options = {
  filterType: 'checkbox',
};
const columns = [
       {
        name: "Host",
        options: {
         filter: true,
         sort: true,
        }
       },
       {
        name: "Logs",
        options: {
         filter: false,
         sort: false,
        }
       },
      ]

export default class MyPage extends React.Component {
componentDidMount() {
  this.props.startRequest();
}

render() {
  return (
      <div>
      <button onClick={this.props.startRequest}>Fetch Data</button>
        {this.props.loading ? <div>Loading...</div> : <div>Press the button</div>}
      <MUIDataTable
        title={"Host List"}
        data={this.props.data ? this.props.data : []}
        columns={columns}
        options={options}
      />
      </div>
    )
  }
}
