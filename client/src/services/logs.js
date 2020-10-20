import api from './apiConfig'

export const getAllLogs = async () => {
  const resp = await api.get('/logs');
  return resp.data;
}

export const getOneLog = async (id) => {
  const resp = await api.get(`/logs/${id}`);
  return resp.data;
}

export const postLog = async (logData) => {
  const resp = await api.post('/logs', {log: logData});
  return resp.data;
}

export const putLog = async (id, logData) => {
  const resp = await api.put(`/logs/${id}`, {log: logData});
  return resp.data;
}

export const destroyLog = async (id) => {
  const resp = await api.delete(`/logs/${id}`);
  return resp;
}

export const addFlavor = async(logId, poseId) => {
  const resp = await api.put(`/poses/${poseId}/logs/${logId}`);
  return resp.data;
}