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
    }
  }
})

render() {

  const options = {
  filter: true,
  selectableRows: true,
  //    filterType: 'checkbox',
  filterType: 'multiselect',
  responsive: 'stacked',
  onRowsSelect: (rowsSelected, allRows) => {
    console.log(rowsSelected, allRows);
  },
  onRowsDelete: (rowsDeleted) => {
    console.log(rowsDeleted, "were deleted!");
  },
  onChangePage: (numberRows) => {
    console.log(numberRows);
  },
  onSearchChange: (searchText) => {
    console.log(searchText);
  }
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
     <button onClick={this.props.startRequest}>重新下載主機清單</button>
           { this.props.loading ? <div>下載中 ...</div> : <div>(如果需要的話)</div> }
        <MUIDataTable
          title={"有資料的主機"}
          data={this.props.data ? this.props.data : []}
          columns={columns}
          options={options}
        />
        </MuiThemeProvider>
    )
  }
}
