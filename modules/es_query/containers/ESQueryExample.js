import { connect } from 'react-redux'
import { startRequest } from '../actions'
import Component from '../components/ESQueryExample'

const mapDispatchToProps = dispatch => ({
  startRequest: () => dispatch(startRequest()),
})

export default connect(state => state.es_query, mapDispatchToProps)(Component)
