import { Route,Routes } from 'react-router-dom';
import LoginForm from './components/Loginform';
import Navbar from './components/Navbar'
import PeopleList from './components/PeopleList'


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LoginForm/>}/>
        <Route path="/peoplelist" element={<PeopleList/>}/>
      </Routes>
    </div>
);
}

export default App;
