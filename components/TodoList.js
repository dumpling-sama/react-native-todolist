import React from 'react';
import { FlatList, View, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Header from './Header';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Welcome, User" />
        <Button title="Add Todo" onPress={ 
          () => this.props.navigation.navigate('Add Todo') 
        } />
        <FlatList data={this.props.todos} 
          renderItem={
            ({ item }) => <TodoItem id={item.id} text={item.text} navigation={this.props.navigation} />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },

  todo: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);