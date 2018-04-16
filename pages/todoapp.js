import Link from 'next/link'
import { Provider } from 'react-redux'
import { Todoapp } from '~/todoapp'
import { getStore } from '~/redux-config'
import { PickTimePeriod } from '~/pickTimePeriod'
import { Values } from 'redux-form-website-template';

export default () =>
  <Provider store={getStore()}>
    <div>
      <h1>Todo App</h1>
      <Todoapp />
      <Link href="/"><a>Home</a></Link>
      <PickTimePeriod/>
      <Values form="MaterialUiForm" />
    </div>
  </Provider>
