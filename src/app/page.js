'use client';
import { Provider } from 'react-redux';
import { RootComponent } from './Main';
import store from '@/store';

export default function Page() {
  return (
    <Provider store={store}>  
      <RootComponent />
    </Provider>
  );
}