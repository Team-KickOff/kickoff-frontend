import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TemplateScreen from '@screens/TemplateScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'app'} component={TemplateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
