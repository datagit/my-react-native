//step1: import
import React, {Component} from 'react';
import {View, Text, ListView} from 'react-native';

//variable global
const DATA = [
  {khoahoc: "khoahoc1", giangvien: "giangvien1"},
  {khoahoc: "khoahoc2", giangvien: "giangvien2"},
  {khoahoc: "khoahoc3", giangvien: "giangvien3"},
  {khoahoc: "khoahoc4", giangvien: "giangvien4"},
]; 

//step2: export class component step2.1 body class
class MyListView2 extends Component {

  //option method
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DATA) 
    };

  }

  renderRow(item) {
    return (
      <View>
        <Text style={{color: 'red'}}>{item.khoahoc}</Text>
        <Text>{item.giangvien}</Text>
      </View>
    );
  }

  //required method
  render() {
    return (
      <View style={{paddingTop: 50,}}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />

      </View>
    );
  }
} //end class

// //step2.2 defined propTypes, defaultProps MyListView1.propTypes = {
// fullname: React.PropTypes.string.isRequired,   age: React.PropTypes.number }
// MyListView1.defaultProps = {   age: 20 } step3: export default class
export default MyListView2;
