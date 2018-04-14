import { connect } from 'react-redux'
import { startRequest } from '../actions'
import Component from '../components/HostList'

const mapDispatchToProps = dispatch => ({
  startRequest: () => dispatch(startRequest()),
})

export default connect(state => state.hostlist, mapDispatchToProps)(Component)
