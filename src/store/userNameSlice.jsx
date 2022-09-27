import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest } from '../api/axios';

export const postLoginRequest = createAsyncThunk('POST_LOGIN', async (userData, thunkApi) => {
  // try {
  const { data } = await loginRequest(userData);
  if (data.accessToken) {
    localStorage.setItem('accessToken', data.accessToken);
  }
  const userName = data.user.email.split('@')[0];

  return userName;
  // }
  // catch {
  //   return thunkApi.rejectWithValue('err'); // [p1] 에러객체의 payload에 들어감!
  // }
  /* [p2]
  1. try catch를 쓰면 에러객체에 메세지를 직접 써서 에러 객체를 내려줄 수 있다.
  2. 그런데 try catch 굳이 안쓰고 그냥 프로미스를 반환하면, 에러면 에러객체, 성공이면 성공객체가 then으로 이어진다.
  ※ createAsyncThunk내부에 있는 promise가 반환되는 것임
  */
});

export const userNameSlice = createSlice({
  name: 'userName',
  initialState: { userName: '' },
  reducers: {},

  extraReducers: builder => {
    builder.addCase(postLoginRequest.fulfilled, (state, action) => {
      return { ...state, userName: action.payload };
    });

    builder.addCase(postLoginRequest.rejected, (state, action) => {
      // [p3-2] console.log(action); // // {error:{}, payload: undifined, type: "POST_LOGIN/rejected"" }
      // [에러처리 질문clear] 여기서 에러처리도 가능
      // [4-2] <에러처리 할 수 있는 곳1> - 여기서 에러처리하면 로그인 실패시 state를 바꿀 수 있음. (에러시 "state를 다루기에 좋음")
      return state;
    });
  },
});

export default userNameSlice.reducer;
