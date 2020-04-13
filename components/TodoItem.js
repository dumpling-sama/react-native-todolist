import React from 'react';
import Swipeable from 'react-native-swipeable-row';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { deleteTodo } from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class TodoItem extends React.Component {
  render() {
    const deleteBtn = 
      <TouchableOpacity style={styles.deleteBtn} onPress={() => this.props.deleteTodo(this.props.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>

    return (
      <Swipeable rightButtons={[deleteBtn]}>
        <TouchableOpacity style={styles.listItem} 
          onPress={ () => this.props.navigation.navigate('Edit Todo', { 
            todo: {
              id: this.props.id,
              text: this.props.text,
            }
          }) }>
          <View style={styles.listItemView}>
            <Text style={styles.listItemText}>
              {this.props.id}:
              {this.props.text}
            </Text>
          </View>
        </TouchableOpacity>
      </Swipeable>
    );
  }
}


const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#EEE"
  },

  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center'
  },

  listItemText: {
    fontSize: 18
  },

  deleteBtn: {
    padding: 15,
    backgroundColor: '#E84D5C',
    color: '#FFFFFF'
  }
})


const mapDispatchToProps = dispatch => (
  bindActionCreators({ deleteTodo }, dispatch)
);

export default connect(null, mapDispatchToProps)(TodoItem);
