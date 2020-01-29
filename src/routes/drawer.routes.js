import React from 'react'
import {View,Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import VendasRoutes from './vendas.routes'
import Sales from '../pages/Sales/index'
  function MenuD({title}){
    return(
       <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text>{title}</Text>
        </View>
    )
  }

const Drawer = createDrawerNavigator()

export default function DrawerVendas() {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={VendasRoutes} />
        <Drawer.Screen name="Home1" component={VendasRoutes} />
        <Drawer.Screen name="Home2" component={VendasRoutes} />
        <Drawer.Screen name="Home3" component={VendasRoutes} />
      </Drawer.Navigator>
  )
}