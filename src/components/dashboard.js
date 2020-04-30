import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity,route} from 'react-native';

class dashboard extends React.Component {
  constructor(props) {
    super(props);
    
  }
 
  render() {
    const {navigation}= this.props;
    // const {title}= route.params;
    // console.log(title)
    return (
      <View style={[styles.container]}>
            
            
            
            
            
            <View style ={[{paddingBottom: 70}, {backgroundColor:"#E114DB"}]}>
            <Text style={{fontSize: 25,color:"white",marginTop:70,marginLeft:15}}>Recharge</Text>
                         
            </View> 





        
           
           <View style ={[styles.innerContainer,{marginTop:-50}]}>
               
                <Text style={styles.Btexts}>Enter Amount</Text> 
                <Text style={styles.Ftexts}>Recommended Recharge</Text>  
                 <Text style={{alignSelf:"center",fontSize:60}}>INR 999</Text>  
                 <View style={{ borderBottomColor:"#bfbfbf",borderBottomWidth:2,marginHorizontal:140}}></View>    
                 
                     <View style={[styles.buttons,{alignSelf:"center"},{alignItems:"center"},{marginTop:10}]}>
                     <TouchableOpacity
                       onPress={()=>{
                              navigation.navigate('home');
                            }}>
                                      <Text style={{fontSize:20,color:"#fff",padding:5}}> Proceed to Payment</Text>
                            </TouchableOpacity>
                     
                    </View>
                   
            </View>








            <View style={styles.Recommended}>   
              <Text style={{fontSize:18}}>Recommended Plans </Text>

              <Text style={{fontSize:16},{color:"#99ccff"}}>View All Plans > </Text>
            </View>







            <View style ={[styles.innerContainer,{flexDirection:"column"},{marginTop:10}]}>

           
               
               
                <Text style={{fontSize:20,color:"#000",padding:5}}> Unlimited Data</Text>
                
                 
                    
                    
                    
                     <View style={[styles.evenlyalign,{flexDirection:"row"}]}>


                                 <View style={{flexDirection:"column"}}>
                                <Text style={styles.lowerView1}> VALIDITY</Text>
                                <Text style={styles.lowerView2}> 30 DAYS</Text>
                     
                     
                                 </View>
                                 <View style={{ borderLeftColor:"#bfbfbf",borderLeftWidth:1,marginHorizontal:10}}></View>
                           
                     
                    
                    <View >
                        <View style={[{flexDirection:"column"}]}>
                                <Text style={styles.lowerView1}> SPEED</Text>
                                <Text style={styles.lowerView2}> 50MBPS</Text>
                     
                     
                        </View>
                     
                    </View>
                   
                   
                   
                   
                    <View style={[styles.buttons,{borderRadius:30},{justifyContent:"center"}]}> 
                              <Text style={{color:"#fff",paddingHorizontal:25,fontSize:20}}> INR 1249</Text>
                             

                    </View>
                    
                    
                    
                    </View>



                <View style={{ borderBottomColor:"#bfbfbf",borderBottomWidth:1,marginHorizontal:8,marginTop:30}}></View>


                    <Text style={{fontSize:20,color:"#000",padding:5}}> Unlimited Data</Text>
                   
                   
                   
                     <View style={[styles.evenlyalign,{flexDirection:"row"}]}>

                           
                            <View style={{flexDirection:"column"}}>
                                <Text style={styles.lowerView1}> VALIDITY</Text>
                                <Text style={styles.lowerView2}> 90 DAYS</Text>
                     
                     
                            </View>
                        <View style={{ borderLeftColor:"#bfbfbf",borderLeftWidth:1,marginHorizontal:10}}></View>
                     
                    
                        <View >
                                <View style={[{flexDirection:"column"}]}>
                                            <Text style={styles.lowerView1}> SPEED</Text>
                                            <Text style={styles.lowerView2}> 100MBPS</Text>
                     
                     
                                  </View>

                           
                     
                        </View>
                        <View style={[styles.buttons,{borderRadius:30},{justifyContent:"center"},{marginHorizontal:10}]}> 
                                        <Text style={{color:"#fff",paddingHorizontal:25,fontSize:20}}> INR 1800</Text>
                             

                                </View>
                        
                        </View>
                      
                    
                        
                    </View>
                    
            </View>
        
        
        
            
      
      
     
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor:"#e6e6e6",
   
  },
  innerContainer: {
    borderRadius : 10,
    borderWidth: 1,
    backgroundColor:"#fff",
    height: 220,
    
    marginHorizontal:10,
    borderColor:"#bfbfbf",
   
    
  },
  Btexts:{
    fontSize: 25,marginTop:20,alignSelf:"center"
  },
  evenlyalign:{
   justifyContent:"space-evenly"
  },
  Ftexts:{
    fontSize: 15,margin:10,alignSelf:"center",color:"#bfbfbf"
  },
  buttons:{
    backgroundColor:"#ff4d6a",
    
   borderRadius:10
  },
  lowerView1:{
    fontSize:11,color:"#bfbfbf",padding:1, marginHorizontal:10

  },
  lowerView2:{
    fontSize:13,color:"#000",padding:1, marginHorizontal:10

  },
  Recommended:{
    flexDirection:"row",justifyContent:"space-between",marginTop:50,marginLeft:14
  }
});

export default dashboard;