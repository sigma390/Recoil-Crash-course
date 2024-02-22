import logo from './logo.svg';
import './App.css';
import  Todos  from './components/Todos';
import {RecoilRoot, useRecoilValue} from 'recoil'
import { totalTodos } from './state/selectors/Totaltodos';

function App() {
  const totalTodoss = useRecoilValue(totalTodos)
  return (
   
      
      <div className="App" style={{margin:10}}>

        <h1>Task List</h1>
      <Todos/>
      <h2>Total Todos:{totalTodoss}</h2>
    </div>
   
    
  );
}

export default App;
