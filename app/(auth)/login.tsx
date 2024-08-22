import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { UserService } from '../../services/api/user/UserService'
import { UserContext } from '../../context/UserContext'
import { User } from '../../models/user/User'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const userContext = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(false)
  const userService = new UserService();

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Todos os campos são obrigatórios.')
    }

    setIsLoading(true);

    const loginResponse = await userService.login(form);

    const user: User = {
      id: loginResponse.user.id,
      name: loginResponse.user.name,
      email: loginResponse.user.email,
    }

    console.log(user.name);
    userContext.setUser(user);

    router.replace('/home')
    setIsLoading(false);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className='w-full flex justify-center min-h-86vh px-4 my-6'>
          <Text className='text-2xl text-black text-semibold mt-10 font-semibold'>Login</Text>
          <FormField
            title="Email"
            value={form.email}
            placeholder=''
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
          />

          <FormField
            title="Password"
            value={form.password}
            placeholder=''
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />

          <CustomButton
            title='Login'
            handlePress={submit}
            isLoading={isLoading}
            otherStyles='mt-7'
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-500 font-normal'>
              Não tem uma conta?
            </Text>
            <Link href="/sign-up" className='text-lg font-semibold text-gray-800'>Crie aqui</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login