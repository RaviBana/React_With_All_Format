//action creators


export function storeValue(data) {
    //action
    return {
      type: "STORE_VALUE",
      payload: data,
    };
  }

  export function storeCurrencies(data){
    return {
        type: "STORE_CURRENCY",
        payload: data
    }
  }