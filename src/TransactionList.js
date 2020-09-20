import React from "react";
import ModalWindow from "./Components/ModalWindow";
import TransactionDetails from "./TransactionDetails";
import OldDetails from "./OldDetails";

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
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{transactions}</tbody>
    </table>
  );
};

const Details = (props) => {
  const { transaction, id } = props;
  return (
    <tr>
      <td colspan="12">
        <div id={`id${id}`} className="collapse">
          <div className="card card-body">
            <TransactionDetails object={transaction} num={id} />
          </div>
        </div>
      </td>
    </tr>
  );
};

const TableRow = (props) => {
  const { transaction, id } = props;

  return (
    <tr data-toggle="collapse" data-target={`#id${id}`} class="clickable">
      <td>{transaction.t_from_my_client.from_account.iban}</td>
      <td>{transaction.t_from_my_client.from_account.account_name}</td>
      <td>some account</td>
      <td>some name</td>
      <td>{transaction.date_transaction}</td>
      <td>{transaction.amount_local}</td>
      <td>
        <button
          className="btn btn-outline-success"
          type="button"
          data-toggle="collapse"
          data-target={`#id${id}`}
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Details
        </button>
      </td>
      <td>
        <ModalWindow
          buttonName="EDIT"
          headerName="Transaction details"
          classDescription="btn btn-outline-warning"
          transactionDetail={transaction}
          bodyComponent={
            <TransactionDetails object={transaction} num={`-modal-${id}`} />
          }
        />
      </td>
    </tr>
  );
};

const TransactionList = (props) => {
  const { transactions } = props;

  const transactionValues = transactions.map((item, i) => {
    return (
      <>
        <TableRow key={i} transaction={item} id={i} />
        <Details transaction={item} id={i} />
      </>
    );
  });
  return <Table transactions={transactionValues} />;
};

export default TransactionList;
