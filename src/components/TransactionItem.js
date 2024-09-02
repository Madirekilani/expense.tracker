import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: left;
  border: 1px solid light grey;
  background-color: white;
  border-radius: 5px;
  padding: 10px 20px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  margin-bottom: 10px;
  cursor: pointer;
`;

const RemoveButton = styled.button`
  background-color: purple;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const DateText = styled.span`
  font-size: 0.9em;
  color: light grey;
  margin-right: 10px;
`;

const TransactionItem = ({ transaction, removeTransaction }) => {
  return (
    <Item isExpense={transaction?.transType === "expense"}>
      <span>{transaction.details}</span>
      <DateText>{transaction.date}</DateText> {/* Display the date here */}
      <span>R{transaction.amount}</span>
      
      <RemoveButton onClick={() => removeTransaction(transaction.id)}>
        Remove
      </RemoveButton>
    </Item>
  );
};

export default TransactionItem