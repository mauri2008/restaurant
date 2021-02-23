const initialState = {
  token:'',
  id:0,
  signed: false,
  user: '',
  provider: false
}


const AuthReducer = (state = initialState, action ) =>{
  switch(action.type){
    case 'SET_TOKEN':
      return {...state, token:action.payload.token };
      break;
    case 'SIGN_IN':
      return {...state, signed:true}
      break;
    case 'SET_USER':
      return {...state, user:action.payload.user };
      break;
    case 'SET_PROVIDER':
      return {...state, provider:true};
      break;
  }

  return state;
}

export default AuthReducer;