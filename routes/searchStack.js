// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import React from 'react';
// import Header from '../shared/header';
// import Search from '../pages/Search';
// import Display from '../pages/Display';

// const screens = {
//   Search: {
//     screen: Search,
//     // screen: ()=><Search notes={notes} handleSetSortBy={handleSetSortBy} />,
//     // screen: ()=><Display global={global} handleSetGlobal={handleSetGlobal} handleShowMainAppToolBar={handleShowMainAppToolBar} handleShowSideDrawer={handleShowSideDrawer} matchAllResult={matchAllResult} getUserSelectedText={getUserSelectedText} getNodeWithSelection={getNodeWithSelection} getAllTextBeforeSelection={getAllTextBeforeSelection} styleSelected={styleSelected} />,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header title='SEARCH THE BOOKS' navigation={navigation} />
//       }
//     },
//   },
//   Display: {
//     screen: Display,
//     // screen: ()=><Search notes={notes} handleSetSortBy={handleSetSortBy} />,
//     // screen: ()=><Display global={global} handleSetGlobal={handleSetGlobal} handleShowMainAppToolBar={handleShowMainAppToolBar} handleShowSideDrawer={handleShowSideDrawer} matchAllResult={matchAllResult} getUserSelectedText={getUserSelectedText} getNodeWithSelection={getNodeWithSelection} getAllTextBeforeSelection={getAllTextBeforeSelection} styleSelected={styleSelected} />,
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header title='SEARCH THE BOOKS' navigation={navigation} />
//       }
//     },
//   },
// }

// const SearchStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerTintColor: '#444',
//     headerStyle: { backgroundColor: '#eee', height: 60 },
//   }
// });

// export default SearchStack;