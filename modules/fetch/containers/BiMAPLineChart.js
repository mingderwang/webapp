import { connect } from 'react-redux'
import { startRequest } from '../actions'
import Component from '../components/BiMAPLineChart'

const mapDispatchToProps = dispatch => ({
  startRequest: () => dispatch(startRequest()),
})

export default connect(state => state.fetch, mapDispatchToProps)(Component)
