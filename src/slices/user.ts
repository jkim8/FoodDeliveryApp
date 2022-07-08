import {createSlice} from '@reduxjs/toolkit';
//store -> root reducer(state) -> user slice, order slice
//state.user.email
//state.order.aaa
//state.ui.sdsdsd

//action: state를 바꾸는 행위/동작
//dispatch: 그 액션을 실제로 싱핼하는 함수
//reducer: 액션이 실제로 실행되면 state를 바꾸는 로직

const initialState = {
  name: '',
  email: '',
  accessToken: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //동기 액션
    setUser(state, action) {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.accessToken = action.payload.accessToken;
    },
  },
  extraReducers: builder => {}, // 비동기 액션
});

export default userSlice;