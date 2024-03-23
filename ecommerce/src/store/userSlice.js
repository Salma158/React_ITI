import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'userInfo',
    initialState:{userData:{}},
    reducers: {
        getUserInfo : (state,action) =>{
            state.userData = action.payload
        }
    }
})

export const {getUserInfo} = userSlice.actions
export default userSlice.reducer