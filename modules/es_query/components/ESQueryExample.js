'use strict'

import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

export default class MyPage extends React.Component {
componentDidMount() {
  this.props.startRequest(); //download host list data from es
}
getMuiTheme = () => createMuiTheme({
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        backgroundColor: "#FFFFFF"
      }
    }
  }
})

render() {
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

  return (
     <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable
          title={"Host List"}
          data={this.props.data ? this.props.data : []}
          columns={columns}
          options={options}
        />
        </MuiThemeProvider>
    )
  }
}
