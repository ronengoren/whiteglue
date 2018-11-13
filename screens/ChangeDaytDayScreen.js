import React from 'react';
import { ScrollView, StyleSheet, Text, Button, AsyncStorage, } from 'react-native';

export default class ChangeDaytDayScreen extends React.Component {
    static navigationOptions = {
        title: 'Change DAYT',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
                <Text>
                    ChangeDaytDayScreen
                </Text>
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />

            </ScrollView>
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
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
