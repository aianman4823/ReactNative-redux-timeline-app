
const initialState = {
    hello: "Hello World"
  }
  
  export default function reducer(state = initialState, action) {
    switch(action.type) {
  
      /* テキストエリアの内容を state.hello に保存する */
      case 'HELLO_WORLD':
        return {
          ...state,
          hello: action.hello
        };
  
      default:
        return state
    }
  }