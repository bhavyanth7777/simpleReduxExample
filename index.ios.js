/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// ARSID
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Step 1. Import createStore from redux 
import { createStore } from 'redux';

// Step 2. Create Action types
const actionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

// Step 3. Create reducer
const reducer = (state, action) => {
  if(action.type === actionTypes.INCREMENT){
    return { count: state.count+1}
  }
  else if (action.type === actionTypes.DECREMENT){
    return {count: state.count -1}
  }
  return state
}

// Step 4. Create initial State 
const initialState = {
  count: 0
}

// Step 5. Create Store 
const store = createStore(reducer, initialState)

export default class simpleReduxExample extends Component {
  render() {
    return (
      <Text style={{fontSize: 100}}>
    {store.getState().count}
  </Text>
    );
  }
}

// Step 6. Dispatch actions to store
store.dispatch({type: actionTypes.INCREMENT})
store.dispatch({type: actionTypes.INCREMENT})
store.dispatch({type: actionTypes.DECREMENT})
store.dispatch({type: actionTypes.INCREMENT})



AppRegistry.registerComponent('simpleReduxExample', () => simpleReduxExample);
