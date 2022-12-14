import React, {useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/pages/Home';
import Anuncios from '../components/pages/Anuncios';
import Notas from '../components/pages/Notas';
import Inasistencias from '../components/pages/Inasistencias';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();
import {AuthContext} from '../components/context/AuthContext';
export const Tabs = ()=>{
  const {userInfo, logout} = useContext(AuthContext);
  console.log()
    return(
        <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'briefcase'
                : 'briefcase-outline';
            } else if (route.name === 'Anuncios') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            }else if (route.name === 'Notas') {
              iconName = focused ? 'library' : 'library-outline';
            }else if (route.name === 'Inasistencias') {
              iconName = focused ? 'reader' : 'reader-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#75c58e',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Anuncios" component={Anuncios} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notas" component={Notas} />
          <Tab.Screen name="Inasistencias" component={Inasistencias} />
        {/* {
          userInfo?.user?.perfiles[0]?.tipo[0].alumno == true ?
          <>
          <Tab.Screen name="Anuncios" component={Anuncios} />
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Notas" component={Notas} />
          <Tab.Screen name="Inasistencias" component={Inasistencias} />
          </>
          : 
          <>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Anuncios" component={Anuncios} />
         
          </>
        } */}
        
        
      </Tab.Navigator>
    )
}