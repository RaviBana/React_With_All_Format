const initialState = {
    value: "",
    currencies: [],
  };

const Reducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'STORE_VALUE' :
            newState.value = action.payload
        return newState

        case 'STORE_CURRENCY':
            newState.currencies = action.payload
            return newState
         default:
            return state
    }
};

export default Reducer;
  
//   const Reducer = (state = initialState, action) => {
//     const newState = JSON.parse(JSON.stringify(state));
//     switch (action.type) {
//       case "STORE_VALUE":
//         // console.log("action", action);
//         newState.value = action.payload;
//         // console.log("newState", newState);
//         return newState;
//       case "STORE_CURRENCIES":
//         newState.currencies = action.payload;
//         return newState;
//       default:
//         return state;
//     }
//   };
  
//   export default Reducer;