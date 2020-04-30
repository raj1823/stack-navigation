
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     text: '',
     password: ''
    };
   // console.warn('Hello I am Constructor');
  }
  onChangeText(text) {
   
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text>{'username: '+this.state.text}</Text>
        <TextInput
          
          style={{
            height: 50,
            width: '90%',
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 20,
            paddingLeft: 10,
          }}
        onChangeText={text => this.setState({text})}
                 
        /> 
        <Text>{'Password:'+ this.state.password}</Text>
        <TextInput
            secureTextEntry={true}
         
          style={{
            height: 50,
            paddingLeft: 10,
            width: '90%',
            borderColor: 'black',
            
            borderWidth: 2,
            borderRadius: 20,
            marginTop: 10,
          }}
          onChangeText={password => this.setState({password})}
        />
  <TouchableOpacity onPress={()=>{

              this.props.navigation.navigate("home2")
  }}>
  <Text style={{padding:10,fontSize:20,color:"red"}}>Click here to move to Clipboard Assignment </Text>
  </TouchableOpacity>
       
      </View>

    );
  }
  componentDidMount() {
    
    
     /* this.setState({
        
      });
      */
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
