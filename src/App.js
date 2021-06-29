import './App.css';
import Weather from './Weather'
import { useState } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


function App() {
  const [color, setColor] = useState()

  return (
    <Provider store={store}>
      <div className="App" style={{ backgroundColor: color }}>
        <Weather setColor={setColor} />
      </div>
    </Provider>
  );
}

export default App;
