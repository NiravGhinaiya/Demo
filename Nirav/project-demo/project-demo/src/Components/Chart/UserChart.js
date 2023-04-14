import React from 'react'
import Chart from "react-apexcharts";


const UserChart = () => {
    var options = {
        chart: {
            type: "line"
        },

        xaxis: {
            labels: {
                formatter: function (value) {
                    return value;
                }
            }
        }
    };
    var seriesUser = [
        {
            name: "Score",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        },
        {
            name: "Score",
            data: [20, 20, 25, 30, 49, 40, 40, 121, 225]
        }
    ];
    var seriesStd = [
        {
            name: "Score",
            data: [30, 125, 49, 60, 70, 40, 35, 50, 91]
        },
        {
            name: "Score",
            data: [20, 220, 25, 30, 2, 40, 70, 121, 225]
        }
    ];
    var seriesEmp = [
        {
            name: "Score",
            data: [30, 20, 49, 60, 170, 40, 35, 150, 191]
        },
        {
            name: "Score",
            data: [20, 22, 25, 30, 102, 40, 70, 121, 70]
        }
    ];
    return (
        <>
        <h1>Chart List</h1>
        <div style={{ display:'flex', justifyContent:'space-around' }}>
            <div className="user_chart">
                <h1>User Record</h1>
                <Chart options={options} series={seriesUser} />
            </div>
            <div className="user_chart">
                <h1>Student Record</h1>
                <Chart options={options} series={seriesStd} />
            </div>
            <div className="user_chart">
                <h1>Employe Record</h1>
                <Chart options={options} series={seriesEmp} />
            </div>
        </div>
        </>
    );
}

export default UserChart