import React, {useState} from "react";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './App.css';



const App = () => {
    const [data, setData] = useState(
        [
            {name: 'Tetiana Si', salary: 2500, increase: false, rise: true, id: 1},
            {name: 'Natalia Si', salary: 1200, increase: true, rise: false, id: 2},
            {name: 'Galina G', salary: 3650, increase: false, rise: false, id: 3},
        ]
    );
   const deleteItem = (id) => {
       const index = data.findIndex(elem => elem.id === id);
       const before = data.slice(0, index);
       const after = data.slice(index + 1);
       const newArr = [...before, ...after]
       setData([...newArr]);
   }




    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}
                           onDelete={deleteItem}
            />
            <EmployeesAddForm/>
        </div>
    );
}

export default App;