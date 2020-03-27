
import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

// import React, { useContext } from "react";
// import { Transaction } from "./Transaction";
// import { GlobalContext } from "../context/GlobalState";

// export const TransactionList = () => {
//   //ประกาศแบบ usestate เพราะ state เราอยู่ใน store
//   const { transactions } = useContext(GlobalContext);

//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map(transaction => (
//           <Transaction key={transaction.id} transaction={transaction} />
//         ))}
//       </ul>
//     </>
//   );
// };
