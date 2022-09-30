import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { usersRequest, nameModifyRequest, userDeleteRequest } from '../api/axios';
import { usersDataForm } from '../const';

export const getUsersRequest = createAsyncThunk('GET_USERS', async (_, thunkApi) => {
  const queryParams = new URLSearchParams(window.location.search);
  let pageNationData = '';

  Object.entries(usersDataForm).forEach(data => {
    const key = data[0];
    const value = queryParams.get(key);

    if (value !== '' && value !== null) {
      if (key.includes('is')) {
        pageNationData += `&setting.${key}=${value}`;
      } else {
        pageNationData += `&${key}=${value}`;
      }
    }
  });

  try {
    return await usersRequest(pageNationData).then(response => ({
      totalCount: response.headers['x-total-count'],
      data: response.data,
    }));
  } catch {
    return thunkApi.rejectWithValue('err');
  }
});

export const patchNameRequest = createAsyncThunk('PATCH_NAME', async (modifyData, thunkApi) => {
  try {
    return await nameModifyRequest(modifyData).then(response => {
      return response.data;
    });
  } catch {
    return thunkApi.rejectWithValue('err');
  }
});

export const deleteRequest = createAsyncThunk('DELETE_USER', async (id, thunkApi) => {
  try {
    return await userDeleteRequest(id).then(response => {
      // console.log(response); // data : {}
      return id;
    });
  } catch {
    return thunkApi.rejectWithValue('err');
  }
});

// <store>
export const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], totalCount: 0 },

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getUsersRequest.fulfilled, (state, action) => {
      return { ...state, users: action.payload.data, totalCount: +action.payload.totalCount - 1 };
    });

    // [TODO] action.payload의 값에는 accounts 배열이 없음. 그래서 state값을 어떻게 update 해야할지 모르겟음
    /*[질문clear] - proxy떄문에 원본을 수정하고 새 객체를 return하지 않아도 참조값이 바뀌어 state가 업데이트 됨.
    state의 복사본을 따지 말고, 기존 state의 값에 접근해서 값을 바꿔주는 식으로 처리함
    proxy는 나중에 공부하기*/
    // 여기서의 state는 이 슬라이스 내부의 값만 받아옴 (이 slice의 initial값!)
    builder.addCase(patchNameRequest.fulfilled, (state, action) => {
      const userIndex = state.users.findIndex(({ id }) => id === action.payload.id);
      console.log(state.users[userIndex].name, action.payload.name);
      if (!userIndex) {
        return state;
      }

      state.users[userIndex].name = action.payload.name;
    });

    // [TODO] action.payload의 값에는 accounts 배열이 없음. 그래서 state값을 어떻게 update 해야할지 모르겟음
    // [질문clear] - 새로운 값을 반환하지 않고, proxy를 이용해서 원본값을 바꿨음.
    builder.addCase(deleteRequest.fulfilled, (state, action) => {
      // console.log(action); // 삭제한 유저의 userId값
      const deleteIndex = state.users.findIndex(el => +el.id === +action.payload);
      state.users.splice(deleteIndex, 1);
    });

    builder.addCase(getUsersRequest.rejected, state => {
      alert('user 데이터 요청 오류');
      return state;
    });
  },
});

export default usersSlice.reducer;
