import "./app-info.css";

const AppInfo = ({numberOfEmployees, numberOfIncreaseEmployees}) => {
    return (
        <div className="app-info">
            <h1>Employee accounting in company N</h1>
            <h2>Total number of employees: {numberOfEmployees} </h2>
            <h2>The prize will be received by: {numberOfIncreaseEmployees} </h2>
        </div>
    );
};

export default AppInfo;
