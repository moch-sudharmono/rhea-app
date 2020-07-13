import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

function HostInfo(props) {
  const {navigation} = props;
  return (
    <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Item>
              <Label>Remember Username / Password</Label>
            </Item>
            <Item>
            <Button onPress={()=> navigation.navigate('HostCar')}>
                <Text>NEXT | Car Info</Text></Button>
            </Item>
          </Form>
        </Content>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#db443c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    margin:5,
    shadowColor: '#000',
    backgroundColor: 'transparent',
  },  
  title: {
    flex:1,    
    color: '#fff',
    padding: 5,
  },
  buttonLabel: {
    color: '#fff',
  },
  buttonSignIn: {
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    
  },
  buttonSignUp: {
    backgroundColor: '#8c8c8c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default HostInfo;