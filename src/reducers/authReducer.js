const initialState = {
  token:'',
  id:0,
  signed: false,
}


const AuthReducer = (state = initialState, action ) =>{
  switch(action.type){
    case 'SET_TOKEN':
      return {...state, token:action.payload.token };
      break;
    case 'SIGN_IN':
      return {...state, signed:true}
      break;
  }

  return state;
}

export default AuthReducer;