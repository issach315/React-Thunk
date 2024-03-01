
import './App.css';
import { Provider } from 'react-redux';
import store from '../src/components/store'; // Import the Redux store
import UserComponent from './components/UserComponet'

function App() {
  return (
    <Provider store={store}>
      <UserComponent />
    </Provider>
  );
}

export default App;
