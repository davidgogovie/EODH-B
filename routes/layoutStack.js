import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/home';
import Layout from '../components/Layout';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Layout: {
    screen: Layout,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Layout' navigation={navigation} />
      }
    },
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
      }
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Review Details',
    }
  },
};

// layout stack navigator screens
const LayoutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default LayoutStack;


