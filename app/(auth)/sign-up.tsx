import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { UserService } from '../../services/api/user/UserService'
import { useUserContext } from '../../context/UserContext'

const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState(false);
  const userContext = useUserContext();
  const userService = new UserService();

  const submit = async () => {
    if (!form.username || !form.email || form.password) {
      Alert.alert('Error', 'Todos os campos são obrigatórios')
    }

    setIsLoading(true);
    const signupResponse = await userService.signup(form);
    
    userContext.setUser(signupResponse.user)
    userContext.setIsLoggedIn(true);

    router.replace('/home')
    setIsLoading(false);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className='w-full flex justify-center min-h-86vh px-4 my-6'>
          <Text className='text-2xl text-black text-semibold mt-10 font-semibold'>Cadastro</Text>

          <FormField
            title="Usuário"
            value={form.username}
            placeholder=''
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='mt-7'
          />

          <FormField
            title="Email"
            value={form.email}
            placeholder=''
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
          />

          <FormField
            title="Senha"
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
              Já tem uma conta?
            </Text>
            <Link href="/login" className='text-lg font-semibold text-gray-800'>Entre aqui</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp