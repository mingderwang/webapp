// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '~/shared/withRoot';
import Main from './titleBar2'

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
        <Main />
        <FooterExample />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TitleTable));
