import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native'
import Generate from './src/Generate';
import Input from './src/InputWithButton';
import Props from './src/Props';
import StylesheetExp from './src/StylesheetExp';
import Flex from './src/FlaxBoxExp';
import DirectionLayout from './src/FlexDirectionBasics';
import ViewExp from './src/ViewAndTextExp';
import ActivityLoderExp from './src/ActivityIndicator';
import ImageExp from './src/ImagesExp';
import TouchOpacityExp from './src/TouchOpacity';
import SwitchExp from './src/SwitchExp';
import ModelExp from './src/ModelExp';
import KeyboardAvoidingComponent from './src/KeyboardAvoidingViewExp';
import DatePickerExp from './src/DatePickerExp';
import FlatListExp from './src/FlatListExp'
import Home from './src/Home';
import AxiosExample from './src/Axios';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='View And Text' component={ViewExp} />
        <Stack.Screen name='Input Text' component={Input} />
        <Stack.Screen name='Touch Opacity' component={TouchOpacityExp} />
        <Stack.Screen name='Flex Box' component={Flex} />
        <Stack.Screen name='Date Picker' component={DatePickerExp} />
        <Stack.Screen name='StyleSheet' component={StylesheetExp} />
        <Stack.Screen name='Image Example' component={ImageExp} />
        <Stack.Screen name='Direction Layout' component={DirectionLayout} />
        <Stack.Screen name='FlatList Example' component={FlatListExp} />
        <Stack.Screen name='Switch Example' component={SwitchExp} />
        <Stack.Screen name='Model Example' component={ModelExp} />
        <Stack.Screen name='ActivityLoderExp' component={ActivityLoderExp} />
        <Stack.Screen name='KeyboardAvoidingComponent' component={KeyboardAvoidingComponent} />
        <Stack.Screen name='Props' component={Props} />
        <Stack.Screen name='AxiosExample' component={AxiosExample} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
})

export default App;