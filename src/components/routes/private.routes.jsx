import React from "react"
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {Payments} from '../Payments/Payments'
import { PaymentsDetails} from '../PaymentsDetails/PaymentsDetails'


const PrivateRoutes = () => {
   return (
    <Router> 
        <Routes>
            <Route path="/payments" element={<Payments/>}/>
            <Route path="/paymentsDetails" element={<PaymentsDetails/>}/>
        </Routes>
    </Router>
   )
}

export default PrivateRoutes