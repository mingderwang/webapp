// @flow

import React from 'react';
import { withStyles } from 'material-ui/styles';
import withRoot from '~/shared/withRoot';
import MainPage from './mainPage'
import { Footer } from '~/footer';

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
        <MainPage />
        <Footer />
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(TitleTable));
