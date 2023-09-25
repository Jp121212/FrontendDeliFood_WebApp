import axios from './axios';
const RestaurantBase = '/restaurant';

export async function getRestaurant(page, perPage, search, sort) {
  try {
    const response = await axios.get(
      `${RestaurantBase}?limit=${perPage}&page=${page}&search=${search}&sort=${sort.sort}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
}
