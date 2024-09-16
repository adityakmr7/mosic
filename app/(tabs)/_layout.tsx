import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue',headerShown:false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="podcast"
                options={{
                    title: 'Podcast',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="podcast" color={color} />,
                }}
            />
            <Tabs.Screen
                name="music"
                options={{
                    title: 'Music',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="music" color={color} />,
                }}
            />
            <Tabs.Screen
                name="follow"
                options={{
                    title: 'Follow',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />

            <Tabs.Screen
                name="chat"
                options={{
                    title: 'chat',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="snapchat" color={color} />,
                }}
            />
        </Tabs>
    );
}
