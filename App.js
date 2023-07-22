import {Provider} from 'react-redux'
import store from './components/redux/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
   
  );
}

export default App;
