// @flow

import Link from 'next/link'
import { Provider } from 'react-redux'
import { getStore } from '~/redux-config'
import build from '~/shared/build.json'
import { FooterExample } from '~/footer';

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>BiMAP</h1>
      <h1>version: {build.version}</h1>
      <Link href="/"><a>Home</a></Link>
      <FooterExample />
    </div>
  </Provider>
