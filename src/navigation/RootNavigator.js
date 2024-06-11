import { NavigationContainer } from "@react-navigation/native"
import MyStack from "./MyStack"
import MyBottomTab from "./MyBottomTab"
import MyDrawer from "./MyDrawer"

export default function RootNavigator() {
  return (

    <NavigationContainer>
        <MyDrawer/>
    </NavigationContainer>

  )
}