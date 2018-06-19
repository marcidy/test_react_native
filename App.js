import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Button
} from 'react-native';
import { AppRegistry } from 'react-native';
import BlazeInput from './blazeInput';
import BlazeSlider from './blazeSlider';

const buttonPressed = () => {
    console.log("shiiiiit");
};

export default class BlazeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ssid: '',
            password: ''
        }

    }

    getVal(val) {
        console.warn(val);
    }

    setWiFiSSID = (val) => {
        this.setState({ssid: val});
    }

    setWiFiPass = (val) => {
        this.setState({password: val});
    }

    setBongName = (val) => {
        this.setState({bongname: val});
    }

	render() {
		return (
			<View style={styles.container}>
                <View>
                    <Button 
                        onPress={buttonPressed}
                        title="b-Laze"
                        color="#FF00FF"
                        accessibilityLabel="poooop"
                    />
    
                    <Button
                        title='lights'
                        buttonStyle={styles.square}
                        textColor={styles.squareColor}
                        onPress={buttonPressed}
                    />
                </View>
                <View>
                    <BlazeInput callbackFromParent={this.setWiFiSSID}
                        placeholder="WiFi SSID / Name"
                        onChangeText={(ssid) => this.setState({ ssid: text })}
                    /> 
                    <BlazeInput callbackFromParent={this.setWiFiPass}
                        placeholder="WiFi Password"
                        onChangeText={(text) => this.setState({ password: text})}
                    /> 
                    <BlazeInput 
                        placeholder="Bong name" callbackFromParent={this.setBondName}
                        onChangeText={(text) => this.getVal(text)}
                    /> 
                </View>
                <View>
                    <Text style={styles.output}> {this.state.ssid} </Text>
                    <Text style={styles.output}> {this.state.password} </Text>
                    <Text>sadf {this.state.ssid} </Text>
                </View>
                <BlazeSlider />
            </View>
		);
	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightskyblue',
    },
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'ivory',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
    },
    squareColor: {
        color: 'rebeccapurple',
        fontSize: 16,
    },
    output: {
        borderColor: 'black',
        height: 50,
        width: 300,
        color: 'red'
    }
});
