import React, { useState } from "react";
import ExpenceDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenceItem = (props) => {
    // тут применяется деструктуризация массива
    // в этом реакт хуке первый элем массива содержит переменную
    // а второй элемент содержит функцию, которая изменяет эту переменную при вызове
    const [title, setTitle] = useState(props.title); // это реакт хук

    const clickHandler = () => {
        setTitle("UPDATED");
    };

    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{"$" + props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenceItem;
