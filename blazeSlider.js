import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider
} from 'react-native';

export default class BlazeSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {speed: 1}
    }

    getVal(val) {
        console.warn(val);
        {/* put code here to set the speed over BT immediately */}
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Slider
                        style={styles.slider}
                        step={1}
                        minimumValue={1}
                        maximumValue={5}
                        value={this.state.speed}
                        onValueChange={val => this.setState({ speed: val})}
                        onSlidingComplete={ val => this.getVal(val)}
                    />
                </View>
                <View>
                    <Text style={styles.slidertext}>
                        {this.state.speed}
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    slider: {
        width: 300,
    },
    slidertext: {
        fontSize: 20,
        margin: 10,
    }
});

