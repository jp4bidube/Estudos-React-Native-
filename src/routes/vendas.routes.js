import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Sales from '../pages/Sales/index'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';

  function MenuDrawer(){
    return(
       <Icon style={{marginLeft:20}} name="ios-menu" size={30} color={'#ff8f00'} />
    )
  }

const Stack = createStackNavigator()

export default function VendasRoutes() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: colors.card},headerTintColor:colors.primary}}>
      <Stack.Screen name='Sales' component={Sales} options={{headerTitle: 'Vendas',headerTitleAlign:'center',headerLeft:MenuDrawer}}/>
      <Stack.Screen name='Pagamentos' component={Sales} options={{headerTitle: 'Pagamentos',headerTitleAlign:'center',headerLeft:MenuDrawer}}/>
      <Stack.Screen name='Faturamentos' component={Sales} options={{headerTitle: 'Vendas',headerTitleAlign:'center',headerLeft:MenuDrawer}}/>
    </Stack.Navigator>
  )
}