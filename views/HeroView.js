/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Button
} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
//import { withNavigation } from '@react-navigation/native';
import { deleteHero } from '../controllers/HeroController';
//import HomeView from "./HomeView";

export default class HeroView extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            hero: this.props.hero,
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ hero: nextProps.hero });
    }

    deleteHero = () => {
        if (!this.state.hero)
            return;

        let deleteHeroMsg = deleteHero(this.state.hero);
        ToastAndroid.show(deleteHeroMsg.message, ToastAndroid.SHORT);
        if (deleteHeroMsg.result) {
            if (this.props.event)
                this.props.event.emit('onDeleteHero');
        }
    };

    render() {
        if (!this.state.hero)
            return <Text style={styles.generalFontSize}>Invalid hero!</Text>

        return (
            <View style={styles.container}>
                <Button
                    title='delete'
                    style={styles.icon}
                    color='red'
                    size={30}
                    onPress={this.deleteHero}
                />

                <Text style={styles.generalFontSize}>{this.state.hero.heroName}</Text>
            </View>
        );
    }
}

//export default withNavigation(HeroView);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 5,
    },
    generalFontSize: {
        fontSize: 20,
    },
    icon: {
        marginHorizontal: 5,
    },
});

