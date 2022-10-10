import React from "react";
import "./ExpenseItem.css";

function ExpenceItem() {
    return (
        <div className="expense-item">
            <div>October 1st 2022</div>
            <div className="expense-item__description">
                <h2>Groot Fig</h2>
                <div className="expense-item__price">$10</div>
            </div>
        </div>
    );
}

export default ExpenceItem;
