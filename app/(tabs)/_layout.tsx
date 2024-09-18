import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import {TouchableOpacity, View, Text, Dimensions} from "react-native";
import React from "react";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import Podcast from '@/assets/images/podcast.svg';
import Music from '@/assets/images/music.svg';
import Follow from '@/assets/images/follow.svg';
import Chat from '@/assets/images/chat.svg';
function BottomTabBar({ state, descriptors, navigation }:BottomTabBarProps) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };
                const icon = options.tabBarIcon?.({
                    focused: isFocused,
                    color: isFocused ? 'blue' : '#222',
                    size: 24,
                });

                // @ts-ignore
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1 ,paddingVertical:40,justifyContent:'center',alignItems:'center'}}
                    >
                        {icon}
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label || ''}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}



export default function TabLayout() {
    return (
        <Tabs tabBar={props => <BottomTabBar {...props} />}
              screenOptions={({ route }) => ({
                  tabBarStyle: {
                    width: Dimensions.get('window').width
                  },
                  tabBarIcon: ({ focused, color, size }) => {
                      let iconName:any;

                      if (route.name === 'index') {
                          iconName = 'home'
                      } else if (route.name === 'podcast') {
                          return <Podcast fill={color}/>
                      }else if(route.name === 'music') {
                          return <Music fill={color}/>
                      }else if(route.name === 'follow') {
                          return  <Follow fill={color}/>
                      }else if(route.name === 'chat') {
                          return <Chat fill={color}/>
                      }

                      // You can return any component that you like here!
                      return <FontAwesome name={iconName} size={size} color={color} />;
                  },
                  tabBarActiveTintColor: 'blue',headerShown:false
              })}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name="podcast"
                options={{
                    title: 'Podcast',
                }}
            />
            <Tabs.Screen
                name="music"
                options={{
                    title: 'Music',
                }}
            />
            <Tabs.Screen
                name="follow"
                options={{
                    title: 'Follow',
                }}
            />

            {/*<Tabs.Screen*/}
            {/*    name="chat"*/}
            {/*    options={{*/}
            {/*        title: 'chat',*/}
            {/*    }}*/}
            {/*/>*/}
        </Tabs>
    );
}
