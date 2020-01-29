import React from 'react';
import { NavigationNativeContainer, DefaultTheme } from '@react-navigation/native'
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import Routes from './routes/login.routes'


const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff8f00',
    background: '#f5f5f5',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
  },
  cardItem:{
    backgroundColor:"#FFF",
    borderWidth: 1,
    borderColor:'#DDD',
    borderRadius:5,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 5,

elevation: 4,
    padding:30,
    marginBottom:20,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ddd',
    marginTop: 20,
    paddingHorizontal: 15,
  },
};

const DarkTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff8f00',
    background: '#4B515D',
    card: '#3E4551',
    text: '#FFF',
    border: '#3E4551',
    placeHolder: '#f5f5f5'
  },
  cardItem:{
    backgroundColor: "#4B515F",
    borderWidth: 1,
    borderColor: "#3E4551",
    borderRadius:5,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 10,
  elevation: 6,
  padding:30,
  marginBottom:20
  },
  input:{
    color:"#f5f5f5",
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#3E4551',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#3E4551',
    marginTop: 20,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 10,
  elevation: 2,
  },
};

export default function App() {


  return (
      <NavigationNativeContainer theme={DarkTheme}>
        <Routes/>
      </NavigationNativeContainer>
  );
}


