import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const arrow = require('react-native-log-errors/src/img/left-arrow.png');
const statusbarHeight = getStatusBarHeight(true);

const styles = StyleSheet.create({
    principal: {
        backgroundColor: '#FFF',
        height: 50,
        width: "100%",
        marginTop: statusbarHeight,
        elevation: 3,
        justifyContent: 'center'
    },
    img: {
        height: 30,
        width: 30
    }
});

export default function ToolBar({navigation}) {
    return (
        <View
            style={styles.principal}
        >
            <TouchableOpacity
                style={{ marginLeft: 18 }}
                onPress={() => navigation.goBack()}
            >
                <Image 
                    style={styles.img}
                    source={arrow}
                />
            </TouchableOpacity>
        </View>
    );
}