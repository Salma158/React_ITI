import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./../src/components/product-details/product-details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;