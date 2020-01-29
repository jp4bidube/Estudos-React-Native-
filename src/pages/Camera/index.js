import React, {useState}from 'react'
import {StyleSheet, View, Modal,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default function Camera({}){
  const [modalVisibility, setModalvisibility] = useState(false)
  
  function handleCamera(){
    setModalvisibility(true)
  }

  return (
    <View style={styles.container} >
    <Modal animationType="fade"
      visible={modalVisibility}
      style={styles.container}
      transparent={true}
      onRequestClose={()=>{setModalvisibility(false)}}>
         <View style={styles.modal}>
          <Text>Modal</Text>
        </View>
      </Modal>
    
        <Icon onPress={handleCamera} name="ios-camera" size={80} color={'#ff8f00'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  modal:{
    flex:1,
    margin:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#DDD'
  }
})