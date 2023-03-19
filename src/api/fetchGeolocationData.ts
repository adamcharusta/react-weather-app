import { geolocationApiInstance } from './apiInstances';
import { GeolocationResponseType } from '../types/geolocationTypes';

const fetchGeolocationData = async (name: string): Promise<GeolocationResponseType | null> => {
  try {
    const { data } = await geolocationApiInstance.get<GeolocationResponseType>('', {
      params: {
        name,
      },
    });

    if (data) return data;

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchGeolocationData;
