import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {Login} from './components/Login/Login';
import {Payments} from './components/Payments/Payments';
import {PaymentsDetails} from './components/PaymentsDetails/PaymentsDetails';
import './index.css';

function App() {

  return (
    <Router> 
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route/>
          <Route path="/payments" element={<Payments/>}/>
            
          <Route/>
          <Route path="/paymentsDetails" element={<PaymentsDetails/>}/>
            
          <Route/>
        </Routes>
    </Router>
    
  )
}

export default App
