import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store/store';
// import router from './Web.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  // <React.StrictMode>  </React.StrictMode>,
  <Provider store={store}>
    <Router>
      <App />
    </Router>
    {/* <RouterProvider router={router} /> */}
  </Provider>

)
