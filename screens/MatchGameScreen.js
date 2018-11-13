import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
// import Nav from '../components/Nav';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import DoubleTap from '../components/DoubleTap';


const w = Dimensions.get('window');

var image1 = require('../assets/images/image1.jpg')
var image2 = require('../assets/images/image2.jpg')
var image3 = require('../assets/images/image3.jpg')
var image4 = require('../assets/images/image4.jpg')
var image5 = require('../assets/images/image5.jpg')
var image6 = require('../assets/images/image6.jpg')

const Cards = [{
    "id": 1,
    "first_name": "Denise",
    "age": 21,
    "friends": 9,
    "interests": 38,
    "image": image1
}, {
    "id": 2,
    "first_name": "Cynthia",
    "age": 27,
    "friends": 16,
    "interests": 49,
    "image": image2
}, {
    "id": 3,
    "first_name": "Maria",
    "age": 29,
    "friends": 2,
    "interests": 39,
    "image": image3
}, {
    "id": 4,
    "first_name": "Jessica",
    "age": 20,
    "friends": 18,
    "interests": 50,
    "image": image4
}, {
    "id": 5,
    "first_name": "Julie",
    "age": 28,
    "friends": 2,
    "interests": 13,
    "image": image5
}, {
    "id": 6,
    "first_name": "Anna",
    "age": 24,
    "friends": 12,
    "interests": 44,
    "image": image6
}]

export default class MatchGameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: Cards,
            liked: false,


        }
    }
    static navigationOptions = {
        title: 'Game',
    };
    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.toggleLike();
        } else {
            this.lastTap = now;
        }
    }
    toggleLike = () => this.setState(state => ({ liked: !state.liked }));



    Card(x) {
        return (
            <View style={styles.card}>
                <Image source={x.image} resizeMode="contain" style={{ width: 350, height: 350 }} />
                <View style={{ width: 350, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', margin: 15, marginTop: 25, }} >
                        <Text style={{ fontSize: 20, fontWeight: '300', color: '#444' }}>{x.first_name}, </Text>
                        <Text style={{ fontSize: 21, fontWeight: '200', color: '#444' }}>{x.age}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ padding: 13, borderLeftWidth: 1, borderColor: '#e3e3e3', alignItems: 'center', justifyContent: 'space-between' }}><Icon name='people-outline' size={20} color="#777" style={{}} /><Text style={{ fontSize: 16, fontWeight: '200', color: '#555' }}>{x.friends}</Text></View>
                        <View style={{ padding: 13, borderLeftWidth: 1, borderColor: '#e3e3e3', alignItems: 'center', justifyContent: 'space-between' }}><Icon name='import-contacts' size={20} color="#777" /><Text style={{ fontSize: 16, fontWeight: '200', color: '#555' }}>{x.interests}</Text></View>
                    </View>
                </View>
            </View>
        )
    }
    handleYup(card) {
        console.log(`Yup for ${card.text}`)
    }

    handleNope(card) {
        console.log(`Nope for ${card.text}`)
    }
    noMore() {
        return (
            <View style={styles.card} >
                <Text>No More Cards</Text>
            </View>
        )
    }

    yup() {
        console.log(this.refs['swiper'])
        this.refs['swiper']._goToNextCard()
    }

    nope() {
        console.log(this.refs['swiper'])
        this.refs['swiper']._goToNextCard()
    }


    render() {
        return (
            <View style={styles.container}>
                {/* <DoubleTap onDoubleTap={this.toggleLike}> */}
                <Image
                    source={require('../assets/images/image3.jpg')}
                    style={{ width: w.width, height: w.width }}
                    resizeMode="cover"
                />
                {/* </DoubleTap> */}

                <View style={styles.iconRow}>
                    <TouchableOpacity onPress={this.toggleLike}>
                        <Image
                            source={this.state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                            style={styles.heartIcon}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleLike}>
                        <Image
                            source={this.state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                            style={styles.heartIcon}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleLike}>
                        <Image
                            source={this.state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                            style={styles.heartIcon}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleLike}>
                        <Image
                            source={this.state.liked ? require('../assets/images/heart.png') : require('../assets/images/heart-outline.png')}
                            style={styles.heartIcon}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>

                    {/* <SwipeCards
                    ref={'swiper'}
                    cards={this.state.cards}
                    containerStyle={{ backgroundColor: '#f7f7f7', alignItems: 'center', margin: 20 }}
                    renderCard={(cardData) => this.Card(cardData)}
                    renderNoMoreCards={() => this.noMore()}
                    handleYup={this.handleYup}
                    handleNope={this.handleNope} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.nope()}>
                        <Iconz name='ios-close' size={45} color="#888" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSmall}>
                        <Iconz name='ios-information' size={25} color="#888" style={{}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => this.yup()}>
                        <Iconz name='ios-heart' size={36} color="#888" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                </View> */}
                </View>
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#f7f7f7',
//     },
//     buttons: {
//         width: 80,
//         height: 80,
//         borderWidth: 10,
//         borderColor: '#e7e7e7',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 40
//     },
//     buttonSmall: {
//         width: 50,
//         height: 50,
//         borderWidth: 10,
//         borderColor: '#e7e7e7',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 25
//     },
//     card: {
//         flex: 1,
//         alignItems: 'center',
//         alignSelf: 'center',
//         borderWidth: 2,
//         borderColor: '#e3e3e3',
//         width: 350,
//         height: 420,
//     }

// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    iconRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    heartIcon: {

        width: 70,
        height: 70,
        margin: 8,
        justifyContent: 'center',


    },
});