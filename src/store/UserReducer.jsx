import { createSlice } from '@reduxjs/toolkit';
import { UserList } from '../data/Data';

const userSlice = createSlice({
    name: 'user',
    initialState: UserList,
    reducers:{
        addUser: (state, action)=>{
            state.push(action.payload)
        },
        updateUser:(state, action)=>{
            const {id, username, email, role} = action.payload;
            const updatedUser = state.find(user => user.id === id);
            console.log(updateUser);
            if(updateUser){
                updatedUser.username = username;
                updatedUser.email = email;
                updatedUser.role = role;
            }
        },
        deleteUser:(state, action)=>{
            const {id} = action.payload;
            const index = state.findIndex((item)=> item.id === id);
            if(index !== -1){
                // delete the item if item is in array
                state.splice(index, 1);
                // state.map(item => item.id--) // decreasing id value for every item
                // loop from the specified index value
                for(let i = index; i < state.length; i++){
                    state[i].id--;
                }
            }
        }
    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;