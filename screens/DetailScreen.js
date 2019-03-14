import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('contact').name,
    headerStyle: {
      backgroundColor: '#2a3daa',
    },
    headerTintColor: '#ffffff',
  });

  capitalise = s => s[0].toUpperCase() + s.slice(1);

  render() {
    let {
      name,
      picture,
      gender,
      company,
      address,
      filmName,
    } = this.props.navigation.getParam('contact');
    let isFemale = gender === 'female';

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: picture }} />
        <View style={styles.detailBox}>
          <Text style={styles.detail}>
            {name} is {this.capitalise(gender)}
          </Text>
          <Text style={styles.detail}>
            {isFemale ? 'She' : 'He'} lives at {address}
          </Text>
          <Text style={styles.detail}>
            {isFemale ? 'She' : 'He'} works at {company}
          </Text>
          <Text style={styles.detail}>
            {isFemale ? 'Her' : 'His'} favourite film is {filmName}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  detailBox: {
    alignItems: 'flex-start',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
    marginBottom: 10,
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default DetailScreen;
