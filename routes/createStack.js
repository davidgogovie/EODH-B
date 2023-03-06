import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Create from '../pages/Create';

const screens = {
  Create: {
    screen: Create,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Create' navigation={navigation} />
      }
    },
  },
}

const CreateStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});

export default CreateStack;