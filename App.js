import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';

import TodoList from './components/TodoList';
import UpdateTodo from './components/UpdateTodo';
import AddTodo from './components/AddTodo';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Todo List">
              <Stack.Screen name="Todo List" component={TodoList} options={{ todos: this.state }}/>
              <Stack.Screen name="Add Todo" component={AddTodo} />
              <Stack.Screen name="Edit Todo" component={UpdateTodo} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}
