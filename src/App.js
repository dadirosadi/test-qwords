import  { Suspense} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from "./routes";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import {Navigation, Footer} from "./components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={null}>
      <PersistGate persistor={persistor}>
          <div className="body">
            <Navigation />
            <Routes />
            <Footer />
          </div>
       </PersistGate>
      </Suspense>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
