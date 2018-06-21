import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppRegistry, TextInput} from 'react-native';

export default class BlazeInput extends Component {
	constructor(props) {
		super(props);
		this.state = {text: ''};
	}

	render() {
		return (
			<View style={{padding: 10}}>
				<TextInput
					style={{height: 40}}
					placeholder="WiFi Name/SSID"
					onChangeText={(text) => this.setState({text})}
				/>
				<Text style={{padding : 10, fontSize: 42}}>
					{this.state.text.split(' ').map((word) => word && '|').join(' ')}
				</Text>
			</View>
		);
	}
}
