import { geolocationApiInstance } from './apiInstances';
import { GeolocationResponseType } from '../types/geolocationTypes';

const fetchGeolocationData = async (name: string): Promise<GeolocationResponseType | null> => {
  try {
    const { data } = await geolocationApiInstance.get<GeolocationResponseType>('', {
      params: {
        name,
      },
    });

    return data ? data : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchGeolocationData;
