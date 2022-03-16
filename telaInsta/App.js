import React from 'react';
import { View, TouchableOpacity, Text, Image, Button, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'

const App = () => {
  return (
    <ScrollView style={{
      backgroundColor: '#CB1F83',
    }}
    >
      <View style={{
        backgroundColor: '#FD5D39',
      }}>
        <Icon name="genderless" size={25} color='#FFFFFF' style={{
          marginTop: 20,
          left: 300,
        }}/>
        <Text style={{
          color: '#FFFFFF',
          bottom: 23,
          left: 309,
          }}>
              ?
        </Text>
        <Icon name="instagram" size={25} color='#FFFFFF' style={{
          left: 370,
          bottom: 44,
        }}/>
      </View>
          <View style={{ 
            width: 450,
            padding: 40, 
            backgroundColor: '#D03C40',
            }}>
        <Icon name="locked" size={25} color='#FFFFFF' style={{
          marginLeft: 170,
          marginBottom: 10,
        }}/>
          <Text style={{color: '#FFFFFF'}}>
            Enter the code sent to your number ending in 8691 or
          </Text>
          <Text style={{color: '#FFFFFF', left: 95,}}>
            use your Backup Codes
          </Text>
          <Text style={{color: '#FFFFFF', left: 40,}}>
            It may take few moments to receive SMS
          </Text>
          </View>
          <TextInput
            style={{
              borderColor: '#87CEEB',
              color: '#B5B5B5',
              fontSize: 20,
              left: 40,
              padding: 10,
              alignItens: 'center',
              borderRadius: 10,
              margin: 10,
              width: 320,
              height: 45,
              backgroundColor: '#CB1F83',
              borderWidth: 1
            }}
            defaultValue="Enter Two-Factor code" 
          />
          <Text style={{
            marginTop: -5,
            left: 290,
            fontSize: 15,
            color: '#FFFFFF',
            fontFamily: 'inherit',
          }}
          >
            What is it?
          </Text>
          <View style={{
            alignItems: 'center',
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#FFF',
              alignItems: 'center',
              padding: 10,
              width: 300,
              marginTop: 10,
            }}> 
              <Text style={{
                color: '#696969',
              }}>
                Login Insta
              </Text>
            </TouchableOpacity>
            </View>
            <View style={{
              alignItems: 'center',
              marginTop: 10,
              }}>
            <Text style={{
                color: '#FFF',

              }}>
                Back to Login
              </Text>
            </View>
            <View style={{
            alignItems: 'center',
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#A62258',
              alignItems: 'center',
              padding: 10,
              width: 40,
              height: 40,
              marginTop: 10,
              borderRadius: 40,
            }}> 
              <Text style={{
                color: '#FFF',
              }}>
                or
              </Text>
            </TouchableOpacity>
            </View>
            <View style={{
            alignItems: 'center',
          }}>
            <TouchableOpacity style={{
              backgroundColor: '#8C1998',
              alignItems: 'center',
              padding: 10,
              width: 300,
              marginTop: 10,
            }}> 
              <Text style={{
                color: '#FFF',
              }}>
                Repost without login
              </Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
  );
}

export default App;