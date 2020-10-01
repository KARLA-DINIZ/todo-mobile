import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard'
import Tarefas from '../pages/Tarefas'

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="Tarefas" component={Tarefas} />
    </App.Navigator>
  )
}

export default AppRoutes;