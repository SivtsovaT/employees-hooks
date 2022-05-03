import React from "react";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './App.css';

const App = () => {
    const data = [
        {name: 'Tetiana Si', salary: 2500, increase: false, rise: true, id: 1},
        {name: 'Natalia Si', salary: 1200, increase: true, rise: false, id: 2},
        {name: 'Galina G', salary: 3650, increase: false, rise: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;