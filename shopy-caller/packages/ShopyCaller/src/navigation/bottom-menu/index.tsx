// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { View } from '@/ui';

// import Messaging from '@/screens/Messaging';
// import Profile from '@/screens/profile';
// import Notifications from '@/screens/notifications';
// import Accueil from '@/screens/accueil';
// import Category from '@/screens/category';
// import colors from '@/ui/theme/colors';
// import { AntDesign } from '@expo/vector-icons';
// import GreenCircle from '@/ui/components/green-circle';
// import AccueilIcon from '@/ui/components/icons/accueil-icon';
// import NotificationsIcon from '@/ui/components/icons/notifications-icon';
// import MessagingIcon from '@/ui/components/icons/messaging-icon';
// import ProfileIcon from '@/ui/components/icons/profile-icon';

// const Tab = createBottomTabNavigator();

// const BottomMenu = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarActiveTintColor: colors.green[10],
//         tabBarInactiveTintColor: 'grey',
//         tabBarStyle: {
//           backgroundColor: colors.neutral[200],
//           borderTopWidth: 0,
//         },
//         tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
//         tabBarShowLabel: false,
//       })}
//     >
//       <Tab.Screen
//         name="Accueil"
//         component={Accueil}
//         options={{
//           tabBarIcon: ({}) => <AccueilIcon />,
//         }}
//       />
//       <Tab.Screen
//         name="Notifications"
//         component={Notifications}
//         options={{ tabBarIcon: ({}) => <NotificationsIcon /> }}
//       />
//       <Tab.Screen
//         name="Messaging"
//         component={Messaging}
//         options={{ tabBarIcon: ({}) => <MessagingIcon /> }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ tabBarIcon: ({}) => <ProfileIcon /> }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default BottomMenu;
