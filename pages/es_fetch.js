import Link from 'next/link'
import { Provider } from 'react-redux'
import { ESQueryExample } from '~/es_query'
import { getStore } from '~/redux-config'
import withRoot from '~/shared/withRoot';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

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
<Paper style={{ position: 'relative' }}>
  <Provider store={getStore()}>
    <div>
      <h1>Hosts List</h1>
      <ESQueryExample />
    </div>
  </Provider>
</Paper>

export default withRoot(withStyles(styles)(EsFetch));
