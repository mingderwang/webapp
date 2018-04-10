import Link from 'next/link'
import { Provider } from 'react-redux'
import { ESQueryExample } from '~/es_query'
import { getStore } from '~/redux-config'
import withRoot from '~/shared/withRoot';
import { withStyles } from 'material-ui/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const EsFetch = () =>
  <Provider store={getStore()}>
    <div>
      <h1>Async ES Query Example</h1>
      <ESQueryExample />
      <p>Open up Redux dev tools to see the actions</p>
    </div>
  </Provider>

export default withRoot(withStyles(styles)(EsFetch));
