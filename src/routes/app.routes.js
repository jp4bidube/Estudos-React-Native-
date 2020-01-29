import React from 'react'
import {Text,View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();

import AttendancesRoutes from './attendance.routes'
import VendasRoutes from './vendas.routes'
import DrawerVendas from './drawer.routes'
import Camera from '../pages/Camera/index'

export default function AppRoutes() {

  function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Icon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
  
  function HomeIconWithBadge(props) {
    // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
    return <IconWithBadge {...props} badgeCount={5} />;
  }

  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Vendas') {
            return (
              <HomeIconWithBadge
                name={'logo-usd'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Atendimentos') {
            return <Icon name="ios-laptop" size={size} color={color} />;
          } 
          else if (route.name === 'Camera') {
            return <Icon name="ios-camera" size={size} color={color} />;
          }
        },
      })}>
        <Tab.Screen name="Atendimentos" component={AttendancesRoutes} />
        <Tab.Screen name="Vendas" component={DrawerVendas} />
        <Tab.Screen name="Camera" component={Camera} />
      </Tab.Navigator>
  );
}