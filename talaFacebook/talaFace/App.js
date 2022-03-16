import React from 'react';
import { View, Text, Image, Button, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#3C5996'
    }}
    >
          <Text style={{
            marginTop: 100,
            textAlign: 'center',
            fontSize: 40,
            color: '#FFFFFF',
            fontFamily: 'inherit',
          }}
          >
            facebook
          </Text>
          <TextInput
            style={{
              borderColor: '#87CEEB',
              color: '#B5B5B5',
              marginTop: 50,
              left: 50,
              padding: 10,
              alignItens: 'center',
              borderRadius: 10,
              margin: 10,
              width: 300,
              height: 40,
              backgroundColor: '#FFFFFF',
              borderWidth: 1
            }}
            defaultValue="email or phone" 
          />
          <TextInput
            style={{
              borderColor: '#87CEEB',
              color: '#B5B5B5',
              left: 50,
              padding: 10,
              borderRadius: 10,
              margin: 10,
              width: 300,
              height: 40,
              backgroundColor: '#FFFFFF',
              borderWidth: 1
            }}
            defaultValue="password"
          />
          <View style={{
            width: 300,
            height: 40,
            left: 50,
            margin: 10,
          }}>
          <Button
            color= '#304676'
            title="Log in"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          </View>
          <Text style={{
            marginTop: 200,
            textAlign: 'center',
            fontSize: 20,
            color: '#FFFFFF'
          }}
          >
            sign up for facebook
          </Text>
    </ScrollView>
  );
}

export default App;