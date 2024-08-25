import { View, Image } from 'react-native';
import images from '../constants/images';
import Icons from '../constants/icons';

const NavBar = () => {
    return (
        <View className='px-4 space-y-6 bg-slate-800 h-10 content-center'>
            <View className='flex-row justify-between h-full items-center'>

                <View>
                    <Image
                        source={images.profile}
                        resizeMethod='resize'
                        className='w-9 h-8 rounded-full'
                    />
                </View>

                <View>
                    <Icons.Config color='white' />
                </View>

            </View>
        </View>
    )
}

export default NavBar;