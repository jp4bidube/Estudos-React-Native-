import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Sales(){
  return(
    <View style={styles.container}>
      <Text>Vendas</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});