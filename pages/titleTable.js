// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';
import TitleBar from './titleBar'
import SimpleTable from './simpleTable'

const styles = (theme: Object) => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 2,
  },
});

class TitleTable extends React.Component<ProvidedProps & Props, State> {
  render() {
    return (
      <div className={this.props.classes.root}>
        <TitleBar />
        <SimpleTable />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TitleTable));
