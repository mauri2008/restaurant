import React from 'react';
import { createStore }  from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './index';


const PesistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const pReducer = persistReducer(PesistConfig, Reducers);

const store = createStore(pReducer);
const persistor = persistStore( store);

export {store, persistor};