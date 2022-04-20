import {createSlice} from "@reduxjs/toolkit"
import {UsersData} from "../FakeData"


const userSlice = createSlice({
    name: "users",
    
    initialState:{value : UsersData},
    
    reducers:{
        addUser: (state, action)=>{
            state.value.push(action.payload)
            
    }, deleteUser : (state, action) =>{
           state.value = state.value.filter(f=> f.id !== action.payload.id)
    }, updateUsername: (state, action) =>{
            state.value.map((i)=>{
                if(i.id === action.payload.id && action.payload.username !== ""){
                    i.username = action.payload.username

                }
            })
    }
    }
  }
)

export const {addUser,updateUsername,deleteUser} = userSlice.actions 
export default userSlice.reducer