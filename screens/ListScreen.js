import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import contacts from '../assets/contacts.json';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  static navigationOptions = {
    title: 'Contacts',
    headerStyle: {
      backgroundColor: '#2a3daa',
    },
    headerTintColor: '#ffffff',
  };

  onPress(item) {
    this.props.navigation.navigate('Detail', { contact: item });
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  renderSeparator() {
    const style = { height: 1, backgroundColor: '#777' };
    return <View style={style} />;
  }

  renderItem({ item }) {
    return (
      <TouchableHighlight
        style={styles.list}
        underlayColor={'#e4e4e4'}
        onPress={() => {
          this.onPress(item); // Use the anonymous function to gain control of the argument passing rather than a reference
        }}>
        <Text style={styles.listItem}>{item.name}</Text>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <FlatList
        data={contacts}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        ItemSeparatorComponent={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    // height: 50,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor: '#fff',
  },
  list: {
    // alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  labelText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});

export default ListScreen;
