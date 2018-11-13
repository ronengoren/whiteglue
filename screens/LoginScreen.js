import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { stackNavigator } from 'react-navigation';
import UserProfileScreen from './UserProfileScreen';
import ChangeDaytDayScreen from './ChangeDaytDayScreen';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
    }
    static navigationOptions = {
        title: 'Login',
    };

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async () => {

        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('ChangeDaytDayScreen');
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

                <View
                    style={styles.container}>
                    <Text style={styles.header}>LOGIN</Text>
                    <TextInput style={styles.textInput}
                        placeholder='Username'
                        onChangeText={(username) => this.setState({ username })}
                        underlineColorAndroid='transparent'
                    />
                    <TextInput style={styles.textInput}
                        placeholder='Password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text>LOG IN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

        );
    }

    login = () => {
        // alert(this.state.username)
        fetch('http://192.168.1.2:3000/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })

            .then((response) => response.json())
            .then((res) => {
                //         alert(res.message)
                if (res.success === true) {
                    AsyncStorage.setItem('user', res.user);
                    this.props.navigation.navigate('App');
                }
                else {
                    alert(res.message);
                }
            })
            .done()
    }

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: 'red',
        padding: 20,
        alignItems: 'center'
    },
});
