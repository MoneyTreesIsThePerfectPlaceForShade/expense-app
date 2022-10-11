import React from "react";
import ExpenceItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Blank Face LP",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "PS5",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Funko Pop: Groot",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "Book",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    return (
        <div className="App">
            <h1>MARIOTA</h1>
            <Expenses item={expenses} />
        </div>
    );
}

export default App;
