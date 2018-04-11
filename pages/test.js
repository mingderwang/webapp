import MUIDataTable from "mui-datatables";

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};

const columns = [
 {
  name: "Name",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
  name: "Company",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "City",
  options: {
   filter: false,
   sort: false,
  }
 },
 {
  name: "State",
  options: {
   filter: false,
   sort: true,
  }
 },
];


class my_First_React_D3_Library_Component extends React.Component {
  componentDidMount() {
		console.log(this.refs.chart); // returns a Chart.js instance reference
	}
  render() {
    return (
      <MUIDataTable
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    )
  }
};

export default my_First_React_D3_Library_Component
