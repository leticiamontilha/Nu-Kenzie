import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { useState } from 'react'

const App = () => {

  const [isDashboard, setIsDashboard] = useState(true)

  const [listTransactions, setListTransactions] = useState([])
  

  return (
    <div className="App">
      { isDashboard ?  <Dashboard setIsDashboard={setIsDashboard} isDashboard={isDashboard}/> : <Home isDashboard={isDashboard} setIsDashboard={setIsDashboard} listTransactions={listTransactions} setListTransactions={setListTransactions}/>}
    </div>
  );
}

export default App;


