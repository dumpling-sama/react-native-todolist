import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux';
import { updateTodo } from '../actions/actions';
import { connect } from 'react-redux';

class UpdateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: '',
    };
  }

  render() {
    const { id, text } = this.props.route.params.todo;

    return (
      <View>
        <TextInput style={styles.textInput}
          defaultValue={text}
          onChangeText={ (newText) => this.setState({ newText }) } />
        <Button title="Save" onPress={ () => {
          this.props.updateTodo(id, this.state.newText);
          this.props.navigation.navigate('Todo List');
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    padding: 12,
  },
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({ updateTodo }, dispatch)
);

export default connect(null, mapDispatchToProps)(UpdateTodo);