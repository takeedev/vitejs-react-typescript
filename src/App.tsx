import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slicebar from './shared/slidebar/slicebar'
import Header from './shared/header/header';
import Page from './page/index';

import './App.css';

function App() {

  return (
    <div className='mainer'>
      <BrowserRouter>
        <Header></Header>
        <Slicebar></Slicebar>
        <div className='page'>
          <Routes>
            <Route path="/SystemParameter" element={<Page.Home></Page.Home>}></Route>
            <Route path="/SelectAddress" element={<Page.AddressPage></Page.AddressPage>}></Route>
            <Route path="/AcceptanceBusiness" element={<Page.DropdownPage></Page.DropdownPage>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
