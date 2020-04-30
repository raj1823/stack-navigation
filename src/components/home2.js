import React from 'react';
import {View, Text, StyleSheet, Clipboard} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      input: '',
      nextScreen: '',
    };
  }
  async copyContent() {
    const content = await Clipboard.getString();
    this.setState({
      nextScreen: content,
    });
  }
  render() {
    const {navigation} = this.props;
    const {text, nextScreen} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Text style={styles.textStyle}>{text} </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('second', {newHandler: this.addString})
            }>
            <Text style={styles.textChild}> click Here</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.copyContent();
            }}>
            <Text style={styles.textChild}>Paste Content</Text>
          </TouchableOpacity>
          <Text style={styles.textChild}>{nextScreen}</Text>
          <Text />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  child: {
    width: '100%',
    flex: 1,
    backgroundColor: '#4B2875',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    paddingTop: 50,
    paddingLeft: 20,
    color: '#fff',
    justifyContent: 'center',
  },
  textChild: {
    fontSize: 40,
    color: 'white',
  },
});

export default Home2;