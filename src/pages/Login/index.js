import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../components/ThemeContext'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import {
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { useTheme, Theme } from '@react-navigation/native'

export default function Login({ navigation, route }, props) {
  const { colors, input } = useTheme();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [theme, setTheme] = useState(false)


  function navigateToAttendances() {
    navigation.navigate('AppRoutes')
  }

  return (
    <View {...props} style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content"></StatusBar>
      <Image source={require('../../assets/source.gif')} style={styles.splash} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={input}
        placeholder="Usuário"
        placeholderTextColor={colors.placeHolder}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        style={input}
        placeholder="Senha"
        placeholderTextColor={colors.placeHolder}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={navigateToAttendances}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>

      <TouchableRipple onPress={() => {
        if (theme == true) {
          setTheme(false)
          route.params.teste(false)
        } else {
          setTheme(true)
          route.params.teste(true)
        }
      }}>
        <View style={styles.preference}>
          <Text>{route.params.teste}</Text>
          <View pointerEvents="none">
            <Switch value={theme} />
          </View>
        </View>
      </TouchableRipple>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
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
  picker: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: '#ddd',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#ff8f00',
    borderRadius: 4,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  splash: {
    height: 320,
    width: 320,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

