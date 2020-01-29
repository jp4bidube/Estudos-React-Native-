import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()

import Attendances from '../pages/Attendances/index'
import AttendanceDetails from '../pages/Attendances/attendanceDetails'

export default function AttendancesRoutes(){

  function SwitchTheme(){
    return(
       <Icon style={{marginLeft:20}} name="ios-settings" size={30} color={'#ff8f00'} />
    )
  }

  const { colors } = useTheme();
  return(
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: colors.card},headerTintColor:colors.primary}}>
       <Stack.Screen name='Attendances' component={Attendances} options={{headerTitle: 'Atendimentos',headerTitleAlign:'center',headerLeft:SwitchTheme}}/>
      <Stack.Screen name='AttendanceDetails' component={AttendanceDetails} options={{headerTitle: 'Detalhes',headerTitleAlign:'center'}}/>
    </Stack.Navigator>
  )
}