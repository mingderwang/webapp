import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
var elasticsearch = require('elasticsearch');
var Promise = require('bluebird');

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const SimpleTable = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell numeric>Calories</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.calories}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
)
}

SimpleTable.getInitialProps = () => {
      // eslint-disable-next-line no-undef
      const esb = require('elastic-builder'); // the builder

      const requestBody = esb.requestBodySearch()
        .query(esb.matchAllQuery().boost(1.2));

      var log = console.log.bind(console);

    var client = new elasticsearch.Client({
    host: 'secure.eth.cards:9200',
    log: 'trace'
    });

    function ping () {
      return client.ping({
      requestTimeout: 30000,
    }, function (error) {
      if (error) {
        console.error('elasticsearch cluster is down!');
      } else {
        console.log('All is well');
      }
    });
    }

    function closeConnection() {
      client.close();
    }

    function search() {
      const esb = require('elastic-builder'); // the builder

      const requestBody = esb.requestBodySearch()
        .query(esb.matchAllQuery().boost(1.2));

      var log = console.log.bind(console);

    return client.search({
      index: "elastalert_status",
      body: requestBody.toJSON()
    }).then(function (body) {
      hits = body.hits.hits;
    })
    //.then(log);
    }

    var hits

    Promise.resolve()
    .then(ping)
    .then(search)
    .then(closeConnection)
    return {classes: hits}
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
