import logo from './logo.svg';
import './App.css';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';
import BookTable from './components/BookTable';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />



      {/* <FormBook />
      <BookTable /> */}

      <div className='container'>
        <Routes>
          <Route path="/form" element={<FormBook />} />
          <Route path="/booktable" element={<BookTable />} />
        </Routes>

      </div >
    </div >

  );
}

export default App;
