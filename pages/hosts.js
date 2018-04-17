import Link from 'next/link'
import { Provider } from 'react-redux'
import { HostList } from '~/hostlist'
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
<div>
<Paper style={{ position: 'relative' }}>
  <Provider store={getStore()}>
    <div>
      <HostList />
    </div>
  </Provider>
</Paper>
</div>
export default withRoot(withStyles(styles)(EsFetch));
