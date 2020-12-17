import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput ,Button } from 'react-native'
import auth from '@react-native-firebase/auth';

const PhoneSignIn = () => {
      const [confirm, setConfirm] = useState(null);
      const [code, setCode] = useState('');

      async function signInWithPhoneNumber(phoneNumber) {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
            console.log(confirm)
      }

      async function confirmCode() {
            try {
                  await confirm.confirm(code);
            } catch (error) {
                  console.log('Invalid code.');
            }
      }

      if (!confirm) {
      return (
                  <Button
                  title="Phone Number Sign In"
                  onPress={() => {signInWithPhoneNumber('+62 822-3526-5301'), console.log('halo')}}
                  />
            );
      }
      return (
            <View>
                  <TextInput value={code} onChangeText={text => setCode(text)} />
                  <Button title="Confirm Code" onPress={() => confirmCode()} />
            </View>
      )
}

export default PhoneSignIn

const styles = StyleSheet.create({})
