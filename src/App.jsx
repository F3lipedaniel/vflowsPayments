import React, {useContext} from 'react';
import PublicRoutes from './components/routes/public.routes';
import PrivateRoutes from './components/routes/private.routes';
import { AuthContext } from './contexts/AuthContext';
import './index.css';

function App() {
  const {auth} = useContext(AuthContext)
  console.log("auth", auth)
  return auth ? <PrivateRoutes/> : <PublicRoutes/>
}
export default App;
