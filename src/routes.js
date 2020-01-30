import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ListUsers from "./pages/ListUsers";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      ListUsers: {
        screen: ListUsers,
        navigationOptions: {
          title: "Users"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Profile"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerBackTitleVisible: null,
        headerStyle: {
          backgroundColor: "#37D993"
        }
      }
    }
  )
);

export default Routes;
