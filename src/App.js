import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import { GlobalProviderState } from './context/GlobalState';

import { Home } from './components/Home';
import { AddEmployee } from './components/AddEmployee';
import { EditEmployee } from './components/EditEmployee';
import { EmployeeList } from './components/EmployeeList';

function App() {
  return (
    <GlobalProviderState>
      <div className="App">
        <AddEmployee/>
        <Home/>  
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Routes>
      </div>
    </GlobalProviderState>
  );
}

export default App;