
import React, {useContext, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../context/AuthContext';
import { StyleSheet, Text, View, TextInput, Image,Button } from 'react-native';


const Anuncios = () => {
  const { isLoading, anuncios, anunciosInfo} = useContext(AuthContext);

  useEffect(()=>{
    anuncios()
  },[])
  console.log(anunciosInfo.length)
  return (
    <View style={styles.mainContainer}>
       <Spinner visible={isLoading} />
        <Spinner visible={isLoading} />
      <View style={styles.container}>

          {
          anunciosInfo.map((item)=>{
         
            return(
              <View>
              <Text>{item.contenido}</Text>
              </View>
            )
          })
        }
        
      <StatusBar style="auto" />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default Anuncios