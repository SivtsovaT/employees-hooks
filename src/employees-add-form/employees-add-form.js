import React, {useState} from "react";
import './employees-add-form.css';

const EmployeesAddForm = () => {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState(0);

    const nameChange = (event) => {
        setName(event.target.value)
    }

    const salaryChange = (event) => {
        setSalary(event.target.value)
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       value={name}
                       onChange={nameChange}
                       className="form-control new-post-label"
                       placeholder="Как его зовут?" />
                <input type="number"
                       value={salary}
                       onChange={salaryChange}
                       className="form-control new-post-label"
                       placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
            <div>name {name} salary {salary}</div>
        </div>
    )
}

export default EmployeesAddForm;