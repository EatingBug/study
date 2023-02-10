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
            let a = state.find((data) => {
                if (data.id == action.payload) {
                    data.count += 1
                }
            })
        },
        addCart(state, action) {
            state.push(action.payload)
        }
    }
})

export let { changeCount, addCart } = cartData.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cartData: cartData.reducer
    }
})