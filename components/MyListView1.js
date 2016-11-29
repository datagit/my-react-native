//step1: import
import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';

//step2: export class component step2.1 body class
class MyListView1 extends Component {

  //option method
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

  }

  //required method
  render() {
    return (
      <View style={{ paddingTop: 50, }}>
        <ListView style={{ padding:30, }}
          dataSource={this
          .ds
          .cloneWithRows([
            {
              name: "Dat.Dao",
              age: 30
            }, {
              name: "Hong.Phuc",
              age: 3
            }, {
              name: "Ngoc.Le",
              age: 30
            }
          ])}
          renderRow={(dataRow) => {
          return (
            <View>
              <Text>{dataRow.name}</Text>
              <Text>{dataRow.age}</Text>
            </View>
          );
        }}/>
      </View>
    );
  }
} //end class

// //step2.2 defined propTypes, defaultProps MyListView1.propTypes = {
// fullname: React.PropTypes.string.isRequired,   age: React.PropTypes.number }
// MyListView1.defaultProps = {   age: 20 } step3: export default class
export default MyListView1;
