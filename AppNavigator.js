
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import Hello from './Hello';
import CheckScreen from './CheckScreen';


const AppNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Hello: {screen: Hello},
  Check: {screen: CheckScreen}
});

export default createAppContainer(AppNavigator);