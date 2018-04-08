import Link from 'next/link'
import { Provider } from 'react-redux'
import { ESQueryExample } from '~/es_query'
import { getStore } from '~/redux-config'

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Async ES Query Example</h1>
      <ESQueryExample />
      <p>Open up Redux dev tools to see the actions</p>
    </div>
  </Provider>
