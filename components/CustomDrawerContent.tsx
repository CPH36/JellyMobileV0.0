import { Alert, View, Text, Pressable, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { supabase } from '~/app/lib/supabase';


export default function CustomDrawerContent(props:any) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const doLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          Alert.alert("error Siging out user")
        }
      }

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
  return (
    <View
        style={{flex: 1}}
    >
      <DrawerContentScrollView {...props} scrollEnabled={false}>
      
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{padding: 20}}>
      <TouchableOpacity style={styles.button}>
      <Pressable onPress={doLogout} style={{padding: 15,  paddingLeft: 10}}>
        <Text style={{ fontSize: 18}}>Logout</Text>
      </Pressable>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 350,
    padding: 20,
    backgroundColor: '#fcfafa',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 50,
    color: '#fff',
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#2b825b',
    borderRadius: 4,
    padding: 10,
    color: '#fff',
    backgroundColor: '#363636',
  },
  button: {
    marginVertical: 15,
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 4,
    borderRadius: 14,
    fontSize: 20
  },
})