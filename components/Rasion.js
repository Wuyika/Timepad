import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image

} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { rgb } from 'chalk';
const { height, width } = Dimensions.get('screen');



const raisonScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Ionicons
                        name='arrow-back'
                        size={width / 13}
                        color='black'
                        onPress={() => navigation.navigate('Task')}
                    />

                </TouchableOpacity>
                <Text style={styles.headText}>Raison Project</Text>
                <View style={styles.workView}>
                    <Text style={styles.workText}>Work</Text>
                </View>

            </View>
            <View style={styles.bodyView}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginHorizontal: width / 3
                }}>
                    <Antdesign
                        name='loading1'
                        size={width / 18}
                        color='#9b51e0'
                    />
                    <Text>UI Design</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Animatable.Image
                        animation="bounceIn"
                        duraton="95000"
                        source={require('../components/6.png')}
                        style={styles.logo}
                        resizeMode='stretch'
                    />
                </View>
            </View>
            <View style={styles.footView}>
                <TouchableOpacity>
                    <View style={styles.circle}>
                        <Ionicons
                            name='pause'
                            size={width / 18}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.circle}>
                        <Ionicons
                            name='play'
                            size={width / 18}
                        />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    head: {
        flex: 1,
        // backgroundColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width / 20
    },
    bodyView: {
        flex: 3,
        // backgroundColor: 'red',
        justifyContent: 'space-evenly'
    },
    footView: {
        flex: 1.6,
        // backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headText: {
        fontSize: width / 16
    },
    workText: {
        color: '#fd5b71'
    },
    workView: {
        backgroundColor: 'rgba(255,239,241,255)'
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: width * 0.2,
        height: width * 0.2,
        backgroundColor: '#f1f1f6',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default raisonScreen
