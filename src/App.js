import './App.css';
import Weather from './Weather'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
}


export default App