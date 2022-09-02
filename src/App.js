import Counter from "./components/counter";
import Header from "./components/header";
import {legacy_createStore, combineReducers}from 'redux';
import counterReducer from "./reducers/contadorReducer";
import { Provider } from "react-redux";
import './styles.css';
function App() {
  const allReducers = combineReducers({counter: counterReducer})
  const store =  legacy_createStore(allReducers);


  return (
    <Provider store={store}>
        <div className="App">
            <Header/>
            <Counter/>
        </div>
    </Provider>
  );
}

export default App;
