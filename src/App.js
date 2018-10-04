import React from 'react'
import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import ScreenA from './screens/ScreenA'
import ScreenB from './screens/ScreenB'
import ScreenC from './screens/ScreenC'
import ScreenD from './screens/ScreenD'
import ScreenE from './screens/ScreenE'
import ScreenF from './screens/ScreenF'

const StackNavigator = createStackNavigator(
  {
    ScreenA,
    ScreenB,
    ScreenC
  }
)

const TabsNavigator = createMaterialTopTabNavigator(
  {
    ScreenD,
    ScreenE,
    ScreenF
  }
)

export default createDrawerNavigator(
  {
    StackNavigator,
    TabsNavigator
  }
)