/* eslint-disable fp/no-nil, fp/no-let, fp/no-mutation, better/no-ifs */
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension'
import epics from './epics'
import StateLoader from "~/shared/stateLoader"
/*
import StateLoader from "~/shared/stateLoader"
import { createStore } from 'redux'

const stateLoader = new StateLoader();

let store = createStore(appReducers, stateLoader.loadState());

store.subscribe(() => {
    stateLoader.saveState(store.getState());
});
*/
let store = null

export default (reducer, initialState = {}) => {
  const epicMiddleware = createEpicMiddleware(epics);
  const enhancers = composeWithDevTools(applyMiddleware(epicMiddleware))
  if (!store) {
    // store = createStore(reducer, initialState, enhancers)
    const stateLoader = new StateLoader();
    store = createStore(reducer, stateLoader.loadState(), enhancers)
    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    })
  }
  return store
}
