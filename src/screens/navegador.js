import { createAppContainer, createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

import Home from '../screens/home';
import Login from '../screens/login';

const AppNavigator = createStackNavigator(
	{
		Home: { screen: Home },
		Login: { screen: Login }
	},
	{
		initialRouteName: 'Login'
	}
);

export default createAppContainer(AppNavigator);
