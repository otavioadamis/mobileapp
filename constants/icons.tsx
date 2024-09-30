import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface IconProps {
    color?: string,
    size?: number
}

const Home = ({ color = "black" }: { color: string }) => {
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

const EyeShow: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Entypo name="eye" size={size} color={color}/>
    );
};
const EyeHide: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Entypo name="eye-with-line" size={size} color={color}/>
    );
};

const ThreeDots: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Entypo name="dots-three-vertical" size={size} color={color}/>
    );
};

const Config: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Ionicons name="settings-outline" size={size} color={color}/>
    );
};

const Comment: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <FontAwesome name="comment-o" size={size} color={color} />
    );
};

const Heart: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <AntDesign name="hearto" size={size} color={color} />
    );
};

const Share: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <AntDesign name="sharealt" size={size} color={color} />
    );
};

const NewMessage: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <MaterialCommunityIcons name="message-badge-outline" size={size} color={color} />
    );
};

const Plus: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <AntDesign name="plus" size={size} color={color} />
    );
};

const Post: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <MaterialIcons name="post-add" size={size} color={color} />
    );
};

const Camera: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Feather name="camera" size={size} color={color} />
    );
};

const Image: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <Entypo name="image" size={size} color={color} />
    );
};

const Close: React.FC<IconProps> = ({ color = 'black', size = 24 }) => {
    return (
        <AntDesign name="close" size={size} color={color} />
    );
};

export default {
    Home,
    Search,
    Notifications,
    Messages,
    EyeShow,
    EyeHide,
    ThreeDots,
    Config,
    Comment,
    Heart,
    Share,
    NewMessage,
    Plus,
    Post,
    Camera,
    Image,
    Close
}