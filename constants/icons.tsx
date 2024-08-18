import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

const Home = ({ color="black" }: { color: string }) => {
    return (
        <Entypo name="home" size={24} color={color} />
    );
}
const Search = ({ color }: { color: string }) => {
    return (
        <AntDesign name="search1" size={24} color={color} />
    );
};
const Notifications = ({ color }: { color: string }) => {
    return (
        <Ionicons name="notifications" size={24} color={color} />
    );
};
const Messages = ({ color }: { color: string }) => {
    return (
        <AntDesign name="message1" size={24} color={color} />
    );
};

export default {
    Home,
    Search,
    Notifications,
    Messages
}