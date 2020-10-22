import api from './apiConfig';

export const getAllPoses = async () => {
  const resp = await api.get('/poses');
  return resp.data;
}

export const getOnePose = async (id) => {
  const resp = await api.get(`/poses/${id}`);
  return resp.data;
}