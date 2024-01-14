import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../screens/appScreens";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"app"} component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
