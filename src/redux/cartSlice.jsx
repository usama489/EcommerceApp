import { createSlice } from "@reduxjs/toolkit"

//This is the initial state for your cart. Here, it's an empty array because the cart starts with no items.
//Why use JSON.parse? Data stored in localStorage
//is always stored as a string. To work with it as a JavaScript object or array, you need to parse it back.
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];
const initialState = []
console.log(initialState)
// const 

//createSlice ---> helps to create a slice of redux store
//A slice represents a specific part of the state (here, the shopping cart).
const cartSlice = createSlice({
    name: "cart",
    initialState,
    //Reducers are functions that define how the state should change based on specific actions.
    reducers: {
        addToCart: (state, action) => {

            state.push(action.payload)

        },
        /*
        What is state.filter Doing?

filter() is a method in JavaScript that creates a new array containing only the items that meet a certain condition.

In this case:

        item => item.id != action.payload.id
        This checks if the id of each item in the cart is not equal to the id in action.payload.

        If item.id is not equal to action.payload.id, the item stays in the cart.
        If item.id is equal to action.payload.id, the item is removed.
        Why return?

        Redux reducers must always return a new state.
        filter() creates a new array (with the item removed), so we return this new array as the updated state.
        */
        deleteFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id) // strict comparison 
        },

        /*
        Purpose: Increases the quantity of a specific item in the cart, identified by its id.
        The cart is stored as an array of items.
        Each item in the array looks like this:   {id:1, name:"Product A", quantitiy:2}
        Why return is used ?
        1. The state.map() function is used to loop through each item in the cart array.
        2. When you use map(), you must return something for each item.
            If the id matches the action.payload (the ID of the item we want to increment), we return a new version of the item with quantity increased.
            If the id doesn't match, we return the item unchanged.
        
        1. state.map()
             The map() function is a loop that creates a new array.
             It goes through each item in the state (cart array).
             For every item, you need to decide:
             Should this item be updated?
             Or should it stay the same?
             2. if (item.id === action.payload)
             The action.payload contains the id of the item whose quantity we want to increment.
             Example: If action.payload is 2, we're looking for the item with id: 2.
             3. return { ...item, quantity: item.quantity + 1 }
             If the id matches, we create a new object for the item with the quantity increased by 1.
             { ...item } is called the spread operator. It copies all the properties of the item (like id, name, etc.) into a new object.
             Then, we update the quantity property to item.quantity + 1.


        */
       
        /*
        Here:

           state.map() creates a new array (immutable update).
           item.quantity++ mutates the item (mutable update).
           This combination triggers the error.
           solution is to use either mutable or immutable style updates consistently.Sincwe redux toolkit uses Immer,prefer
           mutable updates for simplicity
            incrementQuantity: (state, action) => {
            return state = state.map(item => { //state.map()--->creates a new array (immutable update)
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity++ }  //item.quantity++ -->mutates the item (mutable) return updated item 
                }
                return item; // return unchanged items
            })
        },
           decrementQuantity: (state, action) => {
            state.forEach(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    return item.quantity--;
                }
                return item;
            })
        }
        */
       incrementQuantity:(state,action)=>{
        //here action.payload represemts id because while disptaching we are passing id
        const item = state.find(item=>item.id === action.payload);
        if(item){
            item.quantity++; //mutate the item directly
        }
       },
       decrementQuantity:(state,action)=>{
        const item = state.find(item=>item.id === action.payload);
        if(item && item.quantity > 1){
            item.quantity--; //mutate the item directly
        }
       }
       //this uses immer proxy state to handle immutability under the hood, avoiding the error.
       /*
       Avoid return with state.map():
       If you need to loop through the array, use find or forEach with direct mutations.
       
       */
    }

})

// Action creatiors are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;




/*
Immutable Updates with Immer:

RTK uses Immer to let you write "mutating" code (like state.push()) while keeping state updates immutable under the hood.
Combining Reducers:

createSlice automatically combines all the reducers into a single reducer function. You don’t need to write combineReducers() manually.

*/


/*

Potential Bug/Issue
State Mutability Issue:

In Redux, the state should never be directly modified.
The filter method returns a new array, which is fine.
However, Redux Toolkit's createSlice uses Immer (as explained earlier) to handle immutability for you.
So technically, the return statement here is not necessary because Immer allows you to mutate the state directly, and it takes care of immutability.
Strict Comparison (!=) Issue:

!= allows loose equality comparison in JavaScript, which can cause unexpected behavior in some cases.

For example:

1 != "1" → This will evaluate to false because it doesn't strictly compare types.
If item.id or action.payload.id happens to be of a different type (e.g., number vs string), it may cause issues.

Solution: Use !== (strict inequality) to ensure that both value and type are compared correctly.



*/

/*
       Analogy to Understand Proxy State
               Think of a proxy state as a temporary copy of your state:

               You are handed a "scratch paper" version of your state.
               You make changes on this scratch paper (e.g., item.quantity++).
               When you’re done, the system (Immer) creates a fresh, clean copy of the state with your changes applied, while keeping the original state untouched.
               Key Takeaways
               Proxy state lets you write simpler code: You don’t have to manually create new objects or arrays.
               It’s not the real state: Proxy state tracks changes and generates a new immutable state automatically.
               Redux rules are still followed: The original state remains unchanged, ensuring predictable state management.
               
       
       
       */