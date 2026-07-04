
import React from 'react'
import Login from "./component/Auth/login";
import Header from "./component/other/header";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage ,setLocalStorage} from './utils/localStorage';
import {useEffect,useState} from 'react'
import Employeedashboard from './component/Dashboard/EmployeeDashboard';

function App() {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  },[] )

  const [user, setUser] = useState(null)
  const handleLogin = (email,password) =>{
    if(email== 'admin@me.com' && password=='123'){
    setUser('admin')

  }
  else  if(email== 'user@me.com' && password=='123'){
    setUser('user')

  }
  else{
    alert("Invalid credentials")
  }
}

  return (
    <>
    {!user ?<Login handleLogin={handleLogin} />: ''}
    {user== 'admin' ? <AdminDashboard /> : <Employeedashboard />}
    </>
  )
}

export default App;
