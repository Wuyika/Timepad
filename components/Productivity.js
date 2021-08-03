import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
    Dimensions,
    Image,
    TextBreak

} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import react from 'react';


const { height, width } = Dimensions.get('screen')

const productivityScreen = ({ navigation }) => {
    return (
        <View style={styles.proContainer}>
            <View style={styles.proHeader}>
                <TouchableOpacity>
                    <Ionicons
                        name='arrow-back'
                        size={width / 13}
                        color='black'
                        onPress={() => navigation.navigate('Task')}
                    />

                </TouchableOpacity>
                <Text style={styles.headText}>My Productivity</Text>
                <View style={styles.workView}>
                    <Text></Text>
                </View>
            </View>
            <View style={styles.timeHeader}>
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#07e092',
                            borderRadius: 10,
                            height: width / 11,
                            width: width / 10,


                        }}>
                            <FontAwesome
                                name='check'
                                size={width / 20}
                                color='white'
                                marginHorizontal={width / 15}
                            />
                        </View >
                        <View style={{
                            flex: 3,
                            

                        }}>
                            <Text style={styles.iText}>Task</Text>
                            <Text style={styles.iText}>Completed</Text>
                        </View>

                    </View>
                    <View style={styles.box2}>
                        <Text style={{ fontSize: width / 15, fontWeight: 'bold' }}>12</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.box1}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#3d4aba',
                            borderRadius: 10,
                            height: width / 11,
                            width: width / 10,


                        }}>
                            <Ionicons
                                name='stopwatch-outline'
                                size={width / 15}
                                color='white'
                                marginHorizontal={width / 15}
                            />
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.iText}>Time</Text>
                            <Text style={styles.iText}>Duration</Text>
                        </View>

                    </View>
                    <View style={styles.box2}>
                        <Text style={{ fontSize: width / 15, fontWeight: 'bold' }}>1h46m</Text>
                    </View>

                </View>
            </View>
            <View style={styles.dayWeek}>
                <View style={styles.handler}>
                    <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                        borderRadius: 14,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: width / 22 }}>Day</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                        // backgroundColor:'white'
                    }}>
                        <Text style={{ fontSize: width / 22 }} >Week</Text>
                    </View>

                </View>
            </View>
            <View style={styles.chart}>
                <View style={styles.graph}>

                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Antdesign
                        name='clockcircle'
                        size={width / 18}
                        onPress={() => navigation.navigate('Task')}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons
                        name='add'
                        size={width / 12}
                        color='#828282'
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome
                        name='egg'
                        size={width / 18}
                        color='#828282'
                        onPress={() => navigation.navigate('Pro')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    proContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    proHeader: {
        flex: 1.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: width / 20
    },
    timeHeader: {
        flex: 2.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width / 50,

    },
    dayWeek: {
        flex: 1.4,
        // backgroundColor: '#fafaff',
        paddingHorizontal: width / 8,

    },
    handler: {
        flex: 1,
        backgroundColor: '#e9e9ff',
        borderRadius: 14,
        marginVertical: width / 20,
        flexDirection: 'row',
        paddingHorizontal: width / 30,
        paddingVertical: width / 40
    },
    chart: {
        flex: 3.2,
        paddingHorizontal: width / 30
    },
    graph: {
        flex: 1,
        backgroundColor: '#fafaff',
        marginVertical: width / 30,
        borderRadius: 20
    },
    headText: {
        fontSize: width / 16,
        marginLeft: -width / 20,
        alignSelf: 'center'
    },
    footer: {

        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box: {
        flex: 1,
        backgroundColor: '#fafaff',
        marginHorizontal: width / 40,
        marginVertical: width / 30,
        borderRadius: 30,
        paddingVertical: width / 20,
        justifyContent: 'space-between',
        paddingHorizontal:width/40


    },
    box1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',

    },
    box2: {
        flex: 1,
        justifyContent: 'center'

    },
    iText: {
        fontSize: width / 26,
        fontWeight: 'normal',
        paddingHorizontal: width / 30
    }
})

export default productivityScreen
