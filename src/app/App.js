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

        ],

    );
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('');

   const deleteItem = (id) => {
       const index = data.findIndex(elem => elem.id === id);
       const before = data.slice(0, index);
       const after = data.slice(index + 1);
       const newArr = [...before, ...after]
       setData([...newArr]);
   }

    const onToggleIncrease = (id) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, increase: !old.increase};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        setData([...newArr]);
    }

   const onToggleRise = (id) => {
       const index = data.findIndex(elem => elem.id === id);
       const old = data[index];
       const newItem = {...old, rise: !old.rise};
       const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
       setData([...newArr]);
   }


    const employees = data.length;
    const increased = data.filter(item => item.increase).length;

    const addItem = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false,
            id: Math.random().toString()


        }
        const newArr = [...data, newItem];
        setData([...newArr])

    }

    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })
    }

    const onUpdateSearch = (term) => {
        setTerm(term)
    }
    const  filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1500':
                return items.filter(item => item.salary > 1500);
            default:
                return items
        }
    }
    const visibleData = filterPost(searchEmp(data,term), filter);

    const onFilterSelect = (filter) => {
        setFilter(filter)
    }



    return (

        <div className="app">
            <AppInfo employees={employees}
                     increased={increased}
            />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter filter={filter}
                           onFilterSelect={onFilterSelect}
                />
            </div>

            <EmployeesList data={visibleData}
                           onToggleIncrease={onToggleIncrease}
                           onToggleRise={onToggleRise}
                           onDelete={deleteItem}
            />
            <EmployeesAddForm onAdd={addItem}/>
        </div>
    );
}

export default App;