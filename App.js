import { createStackNavigator, createAppContainer } from 'react-navigation';

import ListScreen from './screens/ListScreen';
import DetailScreen from './screens/DetailScreen';

const RootNavigator = createStackNavigator({
  List: ListScreen,
  Detail: DetailScreen,
});

export default createAppContainer(RootNavigator);
