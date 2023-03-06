import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Notes from '../pages/Notes';

const screens = {
  Edit: {
    screen: Notes,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Notes' navigation={navigation} />
      }
    },
  },
}

const EditStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default EditStack;