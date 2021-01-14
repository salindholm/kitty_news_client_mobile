import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './components/HomeScreen'


const Stack = createStackNavigator()

const App = () => {
  const { appHeader } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Meow"
          component={HomeScreen}
          options={{
            title: appHeader,
            headerStyle: {
              backgroundColor: 'black'
            },
            headerTitleStyle: {
              color: 'rgb(240,230,140)',
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App