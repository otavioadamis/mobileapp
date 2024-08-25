import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserContext } from '../../context/UserContext';

const Home = () => {
  const userContext = useUserContext();
  const username = userContext.user?.name;
  
  return (
    <SafeAreaView>
    </SafeAreaView>
  )
}

export default Home