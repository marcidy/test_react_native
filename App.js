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
    console.log("button pressed");
};

const connect = () => {
    console.log('BLE code to submit wifi params goes here');
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
                    <BlazeInput callbackFromParent={this.setWiFiSSID}
                        placeholder="WiFi SSID / Name"
                        onChangeText={(ssid) => this.setState({ ssid: text })}
                    /> 
                    <BlazeInput callbackFromParent={this.setWiFiPass}
                        style={{flexDirection: 'row'}}
                        placeholder="WiFi Password"
                        onChangeText={(text) => this.setState({ password: text})}
                    /> 
                    <Button
                        title='Connect'
                        buttonStyle={styles.connect}
                        textColor={styles.squareColor}
                        onPress={connect}
                    />
                    <BlazeInput 
                        placeholder="Bong name" callbackFromParent={this.setBongName}
                        onChangeText={(text) => this.setState({ bongname: text})}
                    /> 
                </View>
                <View style={styles.outputbox}>
                    <Text style={styles.output}> {this.state.ssid} </Text>
                    <Text style={styles.output}> {this.state.password} </Text>
                </View>
                <View>
                    <BlazeSlider />
                </View>
                <View>
                    <Button 
                        title="b-Laze"
                        onPress={buttonPressed}
                        color="#FF00FF"
                        accessibilityLabel="Turn laser on"
                    />
    
                    <Button
                        title='lights'
                        buttonStyle={styles.square}
                        textColor={styles.squareColor}
                        onPress={buttonPressed}
                    />
                </View>
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
        margin: 15,
        padding: 20,
        flex: 1,
        flexDirection: 'row',
    },
    squareColor: {
        color: 'rebeccapurple',
        fontSize: 16,
        flex: 1,
        flexDirection: 'row',
    },
    output: {
        borderColor: 'black',
        height: 50,
        width: 300,
        color: 'red'
    },
    outputbox: {
        backgroundColor: '#202020',
    },
    connect: {
        backgroundColor: '#000000',
        color: '#FF0000',
        flexDirection: 'row',
    }
});
