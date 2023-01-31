import React from "react"
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {Login} from '../Login/Login';
import {Payments} from '../Payments/Payments';
import { PaymentsDetails} from '../PaymentsDetails/PaymentsDetails';


const PublicRoutes = () => {
    return (
    <Router> 
       <Routes>
         <Route exact path="/" element={<Login/>}/>
         <Route path="/payments" element={<Payments/>}/>
         <Route path="/paymentsDetails" element={<PaymentsDetails/>}/>
        </Routes>
    </Router>
    )

}

export default PublicRoutes