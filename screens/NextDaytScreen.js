import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class NextDaytScreen extends React.Component {
    static navigationOptions = {
        title: 'Next Dayt',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
                <Text>
                    NextDaytScreen
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
