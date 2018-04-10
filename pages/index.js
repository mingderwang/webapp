// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '~/shared/withRoot';
import TitleBar from './titleBar'
import SimpleTable from './simpleTable'
import { FooterExample } from '~/footer';

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
        <FooterExample />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TitleTable));
