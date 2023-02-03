import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Aula01 from './src/pages/Aula01';
import Aula02 from './src/pages/Aula02';

const Pilha = createStackNavigator();

export default function Routers(orientation){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name = 'Login'
                    component = {Login}
                    options = {{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Home'
                    component = {Home}
                    options = {{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Aula01'
                    component = {Aula01}
                    options = {{ headerShown: false }}
                />
                <Pilha.Screen
                    name = 'Aula02'
                    component = {Aula02}
                    options = {{ headerShown: false, orientation}}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}