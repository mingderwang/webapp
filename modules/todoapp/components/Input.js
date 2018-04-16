/* global React */
/* eslint-disable fp/no-nil, better/explicit-return, better/no-ifs */
import { getStore } from '~/redux-config'
import * as a from '~/fetch'
export default class Component extends React.Component {
  state = { inputText: '' }
  onChange = e =>
    this.setState({ inputText: e.target.value })

  onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const { addTodo } = this.props
      addTodo(this.state.inputText)
      this.setState({ inputText: '' })
      getStore().dispatch(a.actions())
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.inputText}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}
