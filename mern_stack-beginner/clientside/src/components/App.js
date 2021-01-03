import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeInfo from "./EmployeeInfo";
import { BrowserRouter, Route } from 'react-router-dom';

const tableHeader = [
    {id: 0, name:'Name'},
    {id:1, name: 'email'}
]

const App = () => {
    const [employeeObj, setEmployeeObj] = useState({});

    const hello = () => {
        console.log('Hello from App.js File');
    }
    
    return(
        <div>
            <div></div>
            <BrowserRouter>
                <Route path="/" exact component={() => (<EmployeeList header={tableHeader} setEmployeeObj={setEmployeeObj} hello={hello} />)} />
                <Route path="/test/:id" exact component={() => (<EmployeeInfo info={employeeObj} />)} />
            </BrowserRouter>
        </div>
    )
}

export default App;