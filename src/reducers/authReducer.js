const initialState = {
  token:'',
  id:0,
  signed: false,
  user: '',
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
  }

  return state;
}

export default AuthReducer;