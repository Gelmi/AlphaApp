import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import MentoringTab from '../../assets/MentoriasTab.png';
import CalendarTab from '../../assets/CalendarTab.png'

import { Header } from 'react-native-elements';

export default class Home extends Component {
    render() {
        return (
            <View
                style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start'}}
            >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Alpha App', style: { color: '#fff' } }}
                />
                <Image style={styles.mentoringtab} source={MentoringTab}/>
                <Image style={styles.calendartab} source={CalendarTab}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
      height: 56,
      width: "100%",
      marginBottom: 0,
      overflow: "hidden",
      top: 30,
    },
    mentoringtab: {
        width: "95%",
        marginTop: "3%",
        borderRadius: 8
    },
    calendartab: {
        width: "95%",
        marginTop: "3%",
        borderRadius: 8
    }
  });
