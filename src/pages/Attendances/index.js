import React,{useState} from 'react'
import {FlatList,View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { useTheme } from '@react-navigation/native';

export default function Attendances({ navigation }){
  const { colors,cardItem } = useTheme();

  function handleAttendance(name){
    console.log(name) 
    navigation.navigate('AttendanceDetails',
    {item:name}
    )
  }

  renderItem = ({item}) => (
    <View style={cardItem}>
      <TouchableOpacity style={{flex:1}} onPress={()=>handleAttendance(item.key)}>
      <Text style={{alignSelf:'center',
    fontSize:16,color:colors.text}} >{item.key}</Text>
      </TouchableOpacity>
    </View>
  )


  return(
    <View style={styles.container}>
       <FlatList style={styles.list}
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={renderItem}
        />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list:{
    padding:20
  },
  text:{
    alignSelf:'center',
    fontSize:16
  },
  atendimento: {
  }
});