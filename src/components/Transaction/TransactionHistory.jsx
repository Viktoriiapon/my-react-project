import React from 'react';
import './Transaction_module.css'

const TransactionHistory = (props) => {
  return (
    <div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th >Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {props.items.map((item) => (
            <tr key={item.id}>
              <td className="tdString">{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
