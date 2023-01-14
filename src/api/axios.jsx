import axios from 'axios';

const BASEURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: BASEURL,
  timeout: 30000,
  headers: { 'Content-type': 'application/json' },
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (typeof error.response.data === 'string') {
      return error.response.data;
    }
    return Promise.reject(error);
  }
);

// [TODO] < CRUD - 파일분리 예정 >
export const loginRequest = userData => {
  return instance.post('/api/login', userData);
};

export const accountsRequest = pageNationData => {
  return instance.get(`/api/accounts?_expand=user&_start=1&_limit=10${pageNationData}`);
};

export const oneAccountRequest = uuid => {
  return instance.get(`/api/accounts?uuid=${uuid}&_expand=user`);
};

export const usersRequest = pageNationData => {
  return instance.get(`/api/users?_embed=accounts&_start=1&_limit=10${pageNationData}`);
};

export const oneUsersRequest = userId => {
  return instance.get(`/api/users/${userId}?_embed=accounts`);
};

export const nameModifyRequest = ({ userId, modifiedName }) => {
  return instance.patch(`/api/users/${userId}`, {
    name: modifiedName,
  });
};

export const userDeleteRequest = userId => {
  return instance.delete(`/api/users/${userId}`);
};
