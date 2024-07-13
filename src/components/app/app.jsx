import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: "John S.",
                    salary: 800,
                    id: 1,
                    increase: false,
                    rise: true,
                },
                {
                    name: "Alex M.",
                    salary: 3000,
                    id: 2,
                    increase: true,
                    rise: false,
                },
                {
                    name: "Carl W.",
                    salary: 15000,
                    id: 3,
                    increase: false,
                    rise: false,
                },
            ],
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter((item) => item.id !== id),
            };
        });
    };

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++,
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            };
        });
    };

    onToggleProp = (id, prop) => {
        this.setState(({ data }) => ({
            data: data.map((elem) => {
                return elem.id === id
                    ? { ...elem, [prop]: !elem[prop] }
                    : elem;
            }),
        }));
    }

    render() {
        const employees = this.state.data.length;
        const increased = this.state.data.filter((elem) => elem.increase).length;
        return (
            <div className="app">
                <AppInfo
                    numberOfEmployees={employees}
                    numberOfIncreaseEmployees={increased}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
