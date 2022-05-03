import React, {useState} from "react";
import './employees-list-item.css';

const EmployeesListItem = ({name, salary}) => {
    const [increase, setIncrease] = useState(false);
    const [like, setLike] = useState(false);

    const onChangeIncrease = (event) => {
        event.preventDefault();
        setIncrease(!increase);
    }

    const onRise = (event) => {
        event.preventDefault();
        setLike(!like)
    }

    let className = "list-group-item d-flex justify-content-between";
    if (increase) {
        className += ' increase';
    }
    if (like) {
        className += ' like';
    }

    return (
        <li className={className}>
            <span className="list-group-item-label" onClick={onRise}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}$/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onIncrease={increase}
                        onClick={onChangeIncrease}
                >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;