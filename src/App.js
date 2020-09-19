import React from "react";
import "./App.css";
import "jquery";
import TransactionList from "./TransactionList";
import TransactionData from "./TransactionsData.json";

const App = () => {
  const transactions = TransactionData.transaction;

  return (
    <div className="container m-3">
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
