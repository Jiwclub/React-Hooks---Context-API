
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    
    { id: 4, text: "Camera", amount: 150 },
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}
// import React, { createContext, useReducer } from "react";
// import AppReducer from './AppReducer';

// // Initial state
// const initialState = {
//   transactions: [
//     // { id: 1, text: "Flower", amount: -20 },
//     // { id: 2, text: "Salary", amount: 300 },
//     // { id: 3, text: "Book", amount: -10 },
//     // { id: 3, text: "Camera", amount: 150 }
//   ]
// };

// // Create context
// //state ค่าเริ่มต้น   เริ่มจากสร้าง GlobalContext โดยมี default จากอาเรย์ transactions

// export const GlobalContext = createContext(initialState);

// // Provider component 
// //Provider (ผู้ส่งข้อมูล)
// export const GlobalProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState);

  
//   // Actions
//   function deleteTransacton(id) {
//     dispatch({
//       type: 'DELETE_TRANSACTION',
//       payload: id
//     });
//   }

//   return (
//     //Provider (ผู้ส่งข้อมูล) และ Consumer (ผู้รับข้อมูล)
//     //เราจะประกาศ GlobalContext.Provider เป็น parent component และส่งค่าผ่าน attribute ที่ชื่อว่า value โดยตัวอย่าง provider จะเตรียมส่งค่า transactions ในอาเรย์ ปให้ consumer
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         deleteTransacton,
        
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };
