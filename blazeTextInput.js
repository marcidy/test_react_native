import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppRegistry, TextInput} from 'react-native';

{/*class WhyReactNativeIsSoGreat extends Component {
  render() {
    return (
      <View>
        <Text>
          If you like React on the web, you'll like React Native.
        </Text>
        <Text>
          You just use native components like 'View' and 'Text',
          instead of web components like 'div' and 'span'.
        </Text>
      </View>
    );
  }
}*/}

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
