import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import axios from 'axios';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      contacts: [],
    };
    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.getFreshData = this.getFreshData.bind(this);
  }

  static navigationOptions = {
    title: 'Contacts',
    headerStyle: {
      backgroundColor: '#2a3daa',
    },
    headerTintColor: '#ffffff',
  };

  getFreshData() {
    axios
      .get('https://robocontacts.herokuapp.com/api/contacts?random')
      .then(({ data }) => {
        this.setState({ contacts: data });
      })
      .catch(error => {
        console.log('Something has gone wrong');
        console.log(error);
      });
  }

  componentDidMount() {
    this.getFreshData();
  }

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
        onRefresh={this.getFreshData}
        refreshing={false}
        data={this.state.contacts}
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
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  list: {
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
