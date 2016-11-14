import React, {Component} from 'react';
import {
  View, ListView, Text, StyleSheet
} from 'react-native';

export default class MyListView extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
            'Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8',
               'Item9', 'Item10'
         ])
    };
  }

  render() {
    return(
      <View>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => (
            <Text style={styles.row}>{rowData}</Text>
          )}
          />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'yellow'
  },
  row: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    textAlign: 'center',
  },
  activeTitle: {
    color: 'red',
  },
});
