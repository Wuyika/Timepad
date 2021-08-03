import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Materialicons from 'react-native-vector-icons/MaterialIcons'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    Image

} from 'react-native';
import * as Animatable from 'react-native-animatable'

class TestApp {
    constructor(props) {
       //   super(props);
        this.state = {
            timerStart: false,
            stopwatchStart: false,
            totalDuration: 90000,
            timerReset: false,
            stopwatchReset: false,
        };
        this.toggleTimer = this.toggleTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    toggleTimer() {
        this.setState({ timerStart: !this.state.timerStart, timerReset: false });
    }

    resetTimer() {
        this.setState({ timerStart: false, timerReset: true });
    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
     this.currentTime = time;
    };
}



const { height, width } = Dimensions.get('screen')

const taskScreen = ({ navigation}, {TestApp}) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}
            
            >
                <Text style={styles.headerText}>Task</Text>
                <TouchableOpacity>
                    <Entypo
                        name='dots-three-horizontal'
                        size={width / 18}
                        color='black'
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.intro}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                }}>
                    <Stopwatch
                        //start={this.state.stopwatchStart}                  
                        options={options} />
                    <TouchableOpacity>
                        <FontAwesome
                            name='chevron-right'
                            size={width / 18}
                            color='black'
                            onPress={() => navigation.navigate('Raison')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Antdesign
                        name='loading1'
                        size={width / 18}
                        color='#9b51e0'
                    />
                    <Text style={{ marginLeft: width / 30, fontSize: width / 25 }}>Raison Project</Text>
                </View>

            </View>

            <View style={styles.start}>
                <Text style={styles.headerText}>Today</Text>
                <TouchableOpacity>
                    <Text style={styles.icon}>See All</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.today}>
                <View style={styles.UI}>
                    <View style={{ flex: 0.6 }}>
                        <View style={styles.circle}>
                            <Ionicons
                                name='ios-desktop-sharp'
                                size={width / 17}
                                color='white'
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={styles.square}>
                            <View style={styles.first} >
                                <Text style={styles.title}>UI Design</Text>
                                <Stopwatch
                                    options={watch}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={styles.title_1}>Work</Text>
                                </View>
                                <View style={{
                                   backgroundColor: 'rgba(155, 81, 224, 0.1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: width / 30,
                                    marginLeft: -width / 5,
                                    borderRadius: width / 20
                                }}>
                                    <Text style={{ color: '#9b51e0',}}>Raison Project</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='play'
                                        size={width / 24}
                                        color='#828282'

                                    />
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.UI}>
                    <View style={{ flex: 0.6 }}>
                        <View style={styles.circle1}>
                            <Materialicons
                                name='fitness-center'
                                size={width / 17}
                                color='white'
                            />
                        </View>
                    </View>

                    <View style={{ flex: 3 }}>
                        <View style={styles.square}>
                            <View style={styles.first} >
                                <Text style={styles.title}>100x Sit-Up</Text>
                                <Stopwatch
                                    options={watch}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'

                            }}>
                                <View>
                                    <Text style={styles.title_1}>Personal</Text>
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255, 165, 86, 0.1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: width / 30,
                                    marginLeft: -width / 5,
                                    borderRadius: width / 20
                                }}>
                                    <Text style={{ color: '#ffa556', }}>Workout</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='play'
                                        size={width / 24}
                                        color='#828282'

                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.UI}>
                    <View style={{ flex: 0.6 }}>
                        <View style={styles.circle2}>
                            <Ionicons
                                name='code-slash'
                                size={width / 17}
                                color='white'
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={styles.square}>
                            <View style={styles.first} >
                                <Text style={styles.title}>Learn HTML & CSS</Text>
                                <Stopwatch
                                    options={watch}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={styles.title_1}>Personal</Text>
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: width / 30,
                                    marginLeft: -width / 5,
                                    borderRadius: width / 20
                                }}>
                                    <Text style={{ color: '#fd5b71' }}>Coding</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='play'
                                        size={width / 24}
                                        color='#828282'

                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={styles.UI}>
                    <View style={{ flex: 0.6 }}>
                        <View style={styles.circle3}>
                            <Ionicons
                                name='book-outline'
                                size={width / 17}
                                color='white'
                            />
                        </View>
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={styles.square}>
                            <View style={styles.first} >
                                <Text style={styles.title}>Read 10 pages of book</Text>
                                <Stopwatch
                                    options={watch}
                                />
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}>
                                <View>
                                    <Text style={styles.title_1}>Personal</Text>
                                </View>
                                <View style={{
                                    backgroundColor: 'rgba(0, 255, 0, 0.1)',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    paddingHorizontal: width / 30,
                                    marginLeft: -width / 5,
                                    borderRadius: width / 20
                                }} >
                                    <Text style={{ color: '#07e092', }}>Reading</Text>
                                </View>
                                <TouchableOpacity>
                                    <FontAwesome
                                        name='play'
                                        size={width / 24}
                                        color='#828282'

                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity><Antdesign
                    name='clockcircle'
                    size={width / 18}
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
    container: {
        flex: 1,
        backgroundColor: '#fafaff'
    },
    header: {
        flex: 0.8,
        //backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width / 30,
        alignItems: 'center',
        paddingTop: width / 12
        //marginTop:height/10,

    },
    intro: {
        flex: 1.3,
        backgroundColor: 'white',
        marginHorizontal: width / 30,
        borderRadius: 12,
        justifyContent: 'space-evenly',
        paddingHorizontal: width / 30
    },
    today: {
        flex: 3.6,
        // backgroundColor: 'green',
        paddingHorizontal: width / 30,
        paddingVertical: width / 30

    },
    footer: {
        flex: 1,
        // backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    headerText: {
        fontSize: height / 30,
        color: 'black'
    },
    icon: {
        fontSize: width / 27
    },
    start: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width / 30,
        alignItems: 'center',
        //backgroundColor: 'blue',
        paddingTop: width / 30
    },
    UI: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 12,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: width / 30,
        justifyContent: 'space-between'
    },
    square: {
        justifyContent: 'center'
    },   
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: '#9b51e0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle1: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: '#ffa556',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle2: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: '#fd5b71',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle3: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: width * 0.1,
        height: width * 0.1,
        backgroundColor: '#07e092',
        justifyContent: 'center',
        alignItems: 'center'
    },
    first: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: width / 25,
        fontWeight: 'bold'
    },
    colored: {


    },
})

const options = {
    container: {
        //backgroundColor: 'white',
    },
    text: {
        fontSize: height / 22,
        color: 'black',
        fontWeight: 'bold'
    }
};

const watch = {
    container: {
        //backgroundColor: 'white',
    },
    text: {
        fontSize: width / 28,
        color: '#828282',

    }
};

export default taskScreen
