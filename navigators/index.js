import HomeView from '../views/HomeView';
import UpdateHeroView from '../views/UpdateHeroView';

import React from 'react'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeView} />
                <Stack.Screen name="UpdateHero" component={UpdateHeroView} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

