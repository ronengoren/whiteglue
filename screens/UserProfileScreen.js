import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class UserProfile extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.ProfileContainer}>
                        <Image
                            source={
                                require('../assets/images/dayt-female-example.jpg')
                            }
                            style={styles.mainImageProfile}
                        />
                    </View>

                    <View style={styles.ProfileInfo}>

                        <Text style={styles.getStartedText}>Name: Barbara</Text>
                        <Text style={styles.getStartedText}>Age: 33</Text>
                        <Text style={styles.getStartedText}>Height: 5'11</Text>
                        <Text style={styles.getStartedText}>Weight: 130</Text>
                        <Text style={styles.getStartedText}>Smoking: No</Text>
                        <Text style={styles.getStartedText}>Country: USA</Text>
                        <Text style={styles.getStartedText}>State: New York</Text>
                        <Text style={styles.getStartedText}>City: Brooklyn</Text>
                        <Text style={styles.getStartedText}>Zipcode: 11237</Text>
                        <Text style={styles.getStartedText}>Neighbourhood: Wiliamsburg</Text>
                        <Text style={styles.getStartedText}>Life Passion: Skating, I love What I do</Text>
                        <Text style={styles.getStartedText}>Dayts Types: Dinner, Picnic, Bar</Text>
                        <Text style={styles.getStartedText}>IG: ronengoren</Text>

                        {/* <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
                            <MonoText style={styles.codeHighlightText}>screens/HomeScreen.js</MonoText>
                        </View> */}

                        {/* <Text style={styles.getStartedText}>
                            Change this text and your app will automatically reload.
            </Text> */}
                    </View>

                    {/* <View style={styles.helpContainer}> */}
                    {/* <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
                        </TouchableOpacity> */}
                    {/* </View> */}
                </ScrollView>

                {/* <View style={styles.tabBarInfoContainer}> */}
                {/* <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text> */}

                {/* <View style={[styles.codeHighlightContainer, styles.navigationFilename]}> */}
                {/* <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText> */}
                {/* </View> */}
                {/* </View> */}
            </View>
        );
    }




}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 20
    },
    ProfileContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    mainImageProfile: {
        width: 300,
        height: 280,
        // resizeMode: 'contain',
        // marginTop: 3,
        // marginLeft: -10,
    },
    ProfileInfo: {
        alignItems: 'flex-start',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
