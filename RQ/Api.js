import axios from 'axios';

const campingApi = axios.create({
  baseURL: 'http://192.168.0.58:8080',
});

//전체 유저 조회
export const getUsers = async () => {
  const response = await campingApi.get('/allUsers');
  return response;
};

export default campingApi;
