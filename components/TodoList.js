import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const listData = [
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
  {key: 'Julie1'},
  {key: 'Julie2'},
  {key: 'Julie3'},
  {key: 'Julie4'},
  {key: 'Julie5'},
  {key: 'Julie6'},
  {key: 'Julie7'},
  {key: 'Julie8'},
  {key: 'Julie9'},
  {key: 'Julie10'},
  {key: 'Julie11'},
  {key: 'Julie12'},
  {key: 'Julie13'},
  {key: 'Julie14'},
  {key: 'Julie15'},
];

export default class TodoList extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          {
            listData.map((el) => (
              <ListItem
                roundAvatar
                avatar={{uri:'http://download.seaicons.com/icons/blackvariant/button-ui-requests-5/1024/ToDo-List-icon.png'}}
                key={el.key}
                title={el.key}
              />
            ))
          }
        </List>
      </ScrollView>
    );
  }
}