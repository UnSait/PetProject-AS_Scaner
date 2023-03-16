import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import RequestLimit from '../RequestLimit/RequestLimit';

function App() {

  return (
    <div className='App'>
      <Header />      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/regions' element={<Main />} />
        <Route path='/regions/:regNum' element={<Main />} />
        <Route path="/request_limit" element={<RequestLimit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
