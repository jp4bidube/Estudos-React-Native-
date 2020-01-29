import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Login from '../pages/Login/index'
import AppRoutes from '../routes/app.routes'

export default function Routes(){
  return(
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#FFF'},headerTintColor:'#ff8f00'}}>
      <Stack.Screen name='Login' component={Login} options={{headerShown:false ,title: 'Login',headerTitleAlign:'center'}}/>
      <Stack.Screen name='AppRoutes' component={AppRoutes} options={{headerShown:false,}}/>
    </Stack.Navigator>
  )
}