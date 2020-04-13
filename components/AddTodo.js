import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/actions'
import { connect } from 'react-redux'

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View>
        <TextInput style={styles.textInput} 
          placeholder="Write what you'd like to do" 
          onChangeText={ (text) => this.setState({ text }) } />
        <Button title="Save" onPress={ () => {
          this.props.addTodo(this.state.text);
          this.props.navigation.navigate('Todo List');
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    padding: 12,
  },
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addTodo }, dispatch)
);

export default connect(null, mapDispatchToProps)(AddTodo);