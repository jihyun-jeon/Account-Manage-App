import { createSlice } from '@reduxjs/toolkit';

export const nowRouteSlice = createSlice({
  name: 'nowRoute',
  initialState: { routeName: '' },
  reducers: {
    setNowRoute: (state, action) => {
      return { routeName: action.payload }; // 리턴값 수정
    },
  },
});

export default nowRouteSlice.reducer;
export const { setNowRoute } = nowRouteSlice.actions;
