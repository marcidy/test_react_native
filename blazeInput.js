import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';

export default class BlazeInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    setText(val) {
        this.props.callbackFromParent(val);
        this.setState({text: val});
    }

    render() {
        return (
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    onChangeText={val => this.setText(val)}
                    title="Input Title"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 250,
        padding: 10,
        backgroundColor: 'yellow',
    },
    inputBox: {
        padding: 10,
    }
});
