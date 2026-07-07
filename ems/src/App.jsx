import Login from "./component/Auth/login";
import Header from "./component/other/header";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { useEffect, useState } from "react";
import Employeedashboard from "./component/Dashboard/EmployeeDashboard";
import { useContext } from 'react'
import { AuthContext } from "./context/AuthContext";

function App() {
  useEffect(() => {
    setLocalStorage();
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData]= useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({role:"admin"});
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      authData
    ) {
      const employee= authData.employees.find((e) => email == e.email && e.password == password)
      if(employee){
        setUser("employee");
       setLoggedInUserData(employee)
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      )
    } 
  }else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user =='admin' ? <AdminDashboard /> : (user == 'employee' ? <Employeedashboard data={loggedInUserData} /> : '')}
    </>
  )
}

export default App;
