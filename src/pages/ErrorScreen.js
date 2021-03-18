import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import ToolBar from '../components/ToolBar';
import strings from '../lang/strings';

const alert = require('react-native-log-errors/src/img/alert.png');
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height - 50,
        justifyContent: 'center'
    },
    imgView: {
        width: '100%',
        alignItems: 'center'
    },
    textView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 20
    },
    img: {
        height: 180,
        width: 180
    }
});

export default function ErrorScreen({ navigation }) {
    
    return (
        <View>
            <ToolBar navigation={navigation} />
            
            <View
                style={styles.container}
            >
                <View
                    style={styles.imgView}
                >
                    <Image 
                        source={alert}
                        style={styles.img}
                    />
                </View>

                <View
                    style={styles.textView}
                >
                    <Text style={{ textAlign: 'center' }}>
                        { strings.error_message }
                    </Text>
                </View>

            </View>
        </View>
    );
}