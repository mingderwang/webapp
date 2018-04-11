import Link from 'next/link'
import { Provider } from 'react-redux'
import { FetchExample } from '~/fetch'
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

const Fetch = () =>
<Paper style={{ position: 'relative' }}>
  <Provider store={getStore()}>
    <div>
      <h1>Dobut fetch data</h1>
      <FetchExample />
      <p>Open up Redux dev tools to see the actions</p>
      <Link href="/"><a>Home</a></Link>
    </div>
  </Provider>
</Paper>
export default withRoot(withStyles(styles)(Fetch));
