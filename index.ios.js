// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View, Text, TextInput, Button } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '', loginSuccess: false };
    }

    handlePress() {
        this.setState({ loginSuccess: true });
    }

    render() {
        if (this.state.loginSuccess) {
            return (
                <View style={{ flex: 1 }}>
                    <Header headerText={'玄奘大學選課系統'} />
                    <AlbumList />
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                    <Text style={{ marginBottom: 20 }}>歡迎來到選課系統</Text>
                    <TextInput
                        style={{ height: 40, margin: 20 }}
                        placeholder="請輸入學號"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Button
                        onPress={() => this.handlePress()}
                        title="登入" color="#841584" accessibilityLabel="登入"
                    />
                </View>
            );
        }
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
