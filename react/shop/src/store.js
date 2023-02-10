import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let cartData = createSlice({
    name: 'cartData',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        changeCount(state, action) {
            let index = state.findIndex((data) => data.id === action.payload)
            state[index].count++
        },
        addItem(state, action) {
            let a = state.find((data)=> data.id === action.payload.id)
            if (a != undefined) {
                a.count += action.payload.count
            }
            else {
                state.push(action.payload)
            }
        },
        deleteItem(state, action) {
            let index = state.findIndex((data) => data.id === action.payload)
            state.splice(index, 1);
        }
    }
})

export let { changeCount, addItem, deleteItem } = cartData.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cartData: cartData.reducer
    }
})