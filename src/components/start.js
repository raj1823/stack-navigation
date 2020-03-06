import React from 'react';
import {View, Text, StyleSheet, TextInput, Image,TouchableOpacity,SafeAreaView, Alert} from 'react-native';

class start  extends React.Component {
  constructor(props) {
    super(props);
    
    
    //console.warn('Hello I am Constructor');
  }
  onPress=(id) => {
      switch(id)
      {
            case 1: Alert.alert("Top left ")
                    break;
            case 2: Alert.alert("Top Right ")
                    break;       
            case 3: Alert.alert("Center")
                    break;
                    case 4: Alert.alert("Bottom left ")
                    break;                
                    case 5: Alert.alert("Bottom Right ")
                    break;


      }
   
  }

  
  render() {
    const {navigation}= this.props;
    console.log("hiiiiiii")
    return (
      <SafeAreaView style={[styles.container]}>
         
         <View style={[styles.cc,{justifyContent:"space-between"},{flex:1}]}>
                             
         
      
                            <TouchableOpacity 
                            onPress={()=>this.onPress(1)}>
                                        <Image style={{width: 80, height: 80}}
                                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                            
                                        /> 
                            </TouchableOpacity>
                            <Text > HELLO</Text>
                            <TouchableOpacity 
                            onPress={()=>this.onPress(2)}>
                                        <Image style={{width: 80, height: 80}}
                                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                            
                                        /> 
                            </TouchableOpacity>
                        
           </View>    
           <View style={[styles.cc,{justifyContent:"space-between"},{alignItems:"center"},{flex:1}]}>      
         
                    <Text> HELLO</Text>
                            <TouchableOpacity 
                            onPress={()=>{
                              navigation.navigate('dashboard');
                            }}>
                                       <Text style={styles.button}>Button</Text>
                            </TouchableOpacity>
                            <Text> HELLO</Text>
                            
                        
           </View> 
           <View style={[styles.cc,{justifyContent:"space-between"},{flex:1},{alignItems:"flex-end"}]}>      
         
      
                            <TouchableOpacity 
                            onPress={()=>this.onPress(4)}>
                                        <Image style={{width: 80, height: 80}}
                                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                            
                                        /> 
                            </TouchableOpacity>
                            <Text> HELLO</Text>
                            <TouchableOpacity activeOpacity={0.5}
                            onPress={()=>this.onPress(5)}>
                                        <Image style={{width: 80, height: 80}}
                                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}
                                          }
                            
                                        /> 
                            </TouchableOpacity>
                        </View>
                     
            
             
             </SafeAreaView>           
                      
         
             
    
    );
  
  
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
   
  },
  button: {
   
    backgroundColor: '#DDDDDD',
    
    borderRadius: 7,
    padding: 10,
    alignItems: 'center',
    
  },
  
  
  cc:{
    flexDirection:'row'
  }
});

export default start;