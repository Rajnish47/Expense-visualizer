import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {

    let chartDataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];

    //console.log(props.expenses)
    for(const index in props.expenses)
    {
        const obj = props.expenses[index]
        const expenseMonth = obj.date.getMonth();
        chartDataPoints[expenseMonth].value += obj.amount;
    }

    return(<Chart dataPoints={chartDataPoints}></Chart>)

}

export default ExpenseChart;