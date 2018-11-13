import React from 'react';
import {
    StyleSheet,
    AsyncStorage,
    Text,
    View,
    Button
} from 'react-native';


export default class UserProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile Page',
    };


    render() {
        return (

            <View
                style={styles.container}>
                <Text>
                    Your profile

                </Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />

            </View>

        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'brown'
    },
    text: {
        color: 'white'
    }
});
