import { Provider } from 'react-redux';
import { store } from "./app/store";
import Home from './Home';


const App = () => {
  return (
      <Provider store={store}>
        <Home/>
      </Provider>
  )
}

export default App