import React from "react";
import ExpenceDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenceItem(props) {
    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{"$" + props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenceItem;
