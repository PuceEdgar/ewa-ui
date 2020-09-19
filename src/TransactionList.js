import React from "react";
import ModalWindow from "./Components/ModalWindow";
import TransactionDetails from "./TransactionDetails";

const Table = (props) => {
  const { transactions } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Account</th>
          <th scope="col">Name</th>
          <th scope="col">Counter account</th>
          <th scope="col">Counter name</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>{transactions}</tbody>
    </table>
  );
};

const TableRow = (props) => {
  const { transaction } = props;

  return (
    <tr>
      <td>{transaction.t_from_my_client.from_account.iban}</td>
      <td>{transaction.t_from_my_client.from_account.account_name}</td>
      <td>some account</td>
      <td>some name</td>
      <td>{transaction.date_transaction}</td>
      <td>{transaction.amount_local}</td>
      <td>
        <ModalWindow
          buttonName="EDIT"
          headerName="Transaction details"
          classDescription="btn btn-outline-warning"
          transactionDetail={transaction}
          bodyComponent={<TransactionDetails object={transaction} />}
        />
      </td>
    </tr>
  );
};

const TransactionList = (props) => {
  const { transactions } = props;

  const transactionValues = transactions.map((item, i) => {
    return <TableRow key={i} transaction={item} />;
  });
  return <Table transactions={transactionValues} />;
};

export default TransactionList;
