'use client';
import { Provider } from 'react-redux';
import { RootComponent } from './Main';
import store from '@/store';
import { useState } from 'react';

export default function Page() {
  const [state, setState] = useState({
    counter: 0,
    todo: [],
  });

  const updateCounter = () => {
    updateState({ type: 'UPDATE_COUNTER', payload: 100 });
  };

  const addTodo = () => {
    updateState({
      type: 'ADD_TODO',
      payload: { id: 1, title: 'Todo item one' },
    });
  };


  const updateState = (action) => {
    if (action.type === 'UPDATE_COUNTER') {
      setState({ ...state, counter: action.payload });
    } else if (action.type === 'ADD_TODO') {
      setState({ ...state, todo: [...state.todo, action.payload] });
    }
  };

  console.log(state);

  return (
    <Provider store={store}>
      {/* <RootComponent /> */}
      <button className="bg-red-400 p-2 m-2 text-white" onClick={updateCounter}>
        Update Counter
      </button>
      <button className="bg-red-400 p-2 m-2 text-white " onClick={addTodo}>
        Add Todo{' '}
      </button>
    </Provider>
  );
}
