import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserInfo} from './data';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});
export default storage;

/**
 * Saves the exercise course data to storage.
 * @param exerciseCourse - The exercise course data to be saved.
 * @param category - The category of the exercise course.
 * @param index - The index of the exercise course.
 */

export async function saveUserInfo(
  data: UserInfo,
): Promise<boolean | undefined> {
  try {
    await storage.save({
      key: 'userInfo',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert('Failed to save user info');
    return false;
  }
}

/**
 * Retrieves the exercise course data from storage.
 * @returns The exercise course data.
 */
export async function getUserInfo(
  enableAlert?: boolean,
): Promise<UserInfo | undefined> {
  try {
    const data = await storage.load({
      key: 'userInfo',
    });
    return data;
  } catch (error) {
    enableAlert ? Alert.alert('No user info found') : null;
    return undefined;
  }
}