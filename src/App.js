import React from "react";
import "./App.css";
import { DetailRow, JsonObject } from "./JsonObject";

function App() {
  const transaction = {
    transaction: {
      account: "accnumber",
      name: "counter name",
      oppositeacc: "counter acc",
      oppname: "counter name",
      t_from_my_client: {
        something: "some value",
        from_account: {
          account: "account number",
          iban: "iban 123",
          signatory: {
            t_person: {
              ssn: "ssn number",
              name: "person name",
              addressess: {
                address: {
                  city: "riga",
                  country: "latvia",
                  zip: "lv-1212",
                },
              },
            },
          },
        },
      },
      t_to: {
        to_something: "to somthing bla",
        to_account: {
          account: "counter account number",
          account_name: "account name",
        },
      },
    },
  };

  return (
    <form className="container m-3">
      <JsonObject value={transaction} />
    </form>
  );
}

export default App;
