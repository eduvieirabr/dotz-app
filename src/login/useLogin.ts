import auth from '@react-native-firebase/auth';
import locales from '../locales/pt-BR';
import AsyncStorage from 'react-native';

export const createUser = async (email: string, pwd: string) => {
  const response = await auth()
    .createUserWithEmailAndPassword(email, pwd)
    .then(() => {
      return locales.login.msg_novo_user_success;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        return(locales.login.msg_novo_user_error_existe);
      }

      if (error.code === 'auth/too-many-requests') {
        return locales.login.msg_muitas_requisicoes;
      }

      if (error.code === 'auth/invalid-email') {
        return locales.login.msg_novo_user_error_invalido;
      }
    });
    return response;
};

export const singIng = async (email: string, pwd: string) => {
  const response = await auth()
    .signInWithEmailAndPassword(email, pwd)
    .then(() => {
      return locales.login.msg_login_ok;
    })
    .catch(error => {
      if (error.code === 'auth/too-many-requests') {
        return locales.login.msg_muitas_requisicoes;
      }

      if (error.code === 'auth/wrong-password') {
        return locales.login.msg_muitas_requisicoes;
      }

      if (error.code === 'auth/invalid-email') {
        return locales.login.msg_novo_user_error_invalido;
      }
    });
    return response;
};

export const storeData = async (key: string, value: any): Promise<boolean> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getData = async (key: string): Promise<boolean> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
    return true;
  } catch (e) {
    return false;
  }
};
