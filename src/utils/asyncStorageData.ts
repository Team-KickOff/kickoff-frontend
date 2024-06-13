import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? JSON.parse(value) : null;
  } catch (e: any) {
    // error reading value
    if (e.message.includes('Unexpected character')) {
      return e.message.split(':')[2];
    }
    return false;
  }
};

const setData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};
const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

export default {getData, setData, removeData};
