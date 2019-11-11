import { GET_CITIES, ADD_CITIES, DELETE_CITIES } from './types';

export const getCities = (payload) => {
    return {
        type: GET_CITIES,
        payload: payload
    };
}