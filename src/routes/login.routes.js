import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'



import Login from '../pages/Login/index'
import AppRoutes from '../routes/app.routes'

export default function Routes(pros) {
  const { toggle } = pros
  console.log(toggle)

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#FFF' }, headerTintColor: '#ff8f00' }}>
      <Stack.Screen initialParams={{ teste: toggle }} name='Login' component={Login} options={{ headerShown: false, title: 'Login', headerTitleAlign: 'center' }} />
      <Stack.Screen name='AppRoutes' component={AppRoutes} options={{ headerShown: false, }} />
    </Stack.Navigator>
  )
}