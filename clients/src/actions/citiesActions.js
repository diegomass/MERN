import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from './types';

export const getCities = () => {
    return {
        type: GET_CITIES
    };
}