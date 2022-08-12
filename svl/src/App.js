import logo from './logo.svg';
import './App.css';
import { FormBook } from './components/FormBook';
import { NavBar } from './components/NavBar';
import BookTable from './components/BookTable';

function App() {
  return (
    <div>
      <NavBar />
      
      <div className='container'>

      <FormBook />
      <BookTable />
    </div>
    </div >

  );
}

export default App;
