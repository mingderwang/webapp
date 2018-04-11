// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '~/shared/withRoot';
import TitleBar2 from './titleBar2'

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
        <TitleBar2 />

        <FooterExample />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TitleTable));
