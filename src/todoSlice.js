import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get("https://dummyjson.com/todos")
    sessionStorage.setItem("allTodos", JSON.stringify(response.data.todos))
    return response.data.todos
})



const todoSlice = createSlice({
    name : 'todos',
    initialState : {
        allTodos:{},
        error : "",
    loading : false
},

    
    

reducers: {

},

extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.allTodos = action.payload
        state.error = ""
    })

    builder.addCase(fetchTodos.pending, (state, action) => {
        state.loading = true
        state.allTodos = {}
        state.error = ""
    })
    builder.addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.allTodos = {}
        state.error = "API call failed..please try after some time!!!"
    })


}


})

export default todoSlice.reducer
