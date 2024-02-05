import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanilla(Older) Redux - states were not mutated directly & "return" was kindOf mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      // RTK(New Redux) - we "have" to Directly mutate/modify the state(initialState). Bts RTK is doing above 3 steps using "IMMER Library"
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    // originalState = {items : ["pizza"]}
    clearCart: (state) => {  
      // Vanilla(Older) Redux -
      // console.log(current(state)) = ["pizza"]
      // state = []  it's not possible bec here we are not modifying the originalState & passing/adding the Reference to it i.e making the local variable(state) empty
      // console.log(current(state)) = []
      // console.log(originalState) = ["pizza"]  // no change in originalState

      // RTK(New Redux) - Either mutate the originalState(existing) OR return a new State(i.e [])
      state.items.length = 0;  // this makes the originalState empty
      // OR
      // return {items : []}   // this new object([]) will be replaced inside "originalState = {items : []}"
    },
  },
});

// cartSlice is like a big object which will have actions & reducer
// {
//     actions:{
//         addItem
//     };
//     reducer
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
