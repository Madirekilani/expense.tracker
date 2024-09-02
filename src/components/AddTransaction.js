import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  border: 1px solid black;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 25px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  outline: none;
  border-radius: 5px;
  margin: 5px 0;
  border: 1px solid black;
  font-weight: bold;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  font-weight: bold;
`;

const Label = styled.label`
  margin-left: 10px;
  cursor: pointer;
`;

const RadioBtn = styled(RadioContainer)`
  margin: 10px 20px 10px 0;
`;

const SubmitBtn = styled.button`
  background-color: purple;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: darkpurple;
  }
`;

const AddTransaction = ({ setToggle, AddTransactions }) => {
  const [amount, setAmount] = useState("");
  const [details, setDetails] = useState("");
  const [transType, setTransType] = useState("expense");
  const [date, setDate] = useState("");  // New state for date

  const AddTransactionData = () => {
    AddTransactions({
      amount: Number(amount),
      details,
      transType,
      date, // Include date in the transaction data
      id: Date.now(),
    });
    setToggle();
  };

  return (
    <Container>
      <Input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Description"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <Input
        type="date"  // Date input field
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <RadioContainer>
        <RadioBtn>
          <input
            type="radio"
            id="expense"
            name="type"
            value="expense"
            checked={transType === "expense"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="expense">Expense</Label>
        </RadioBtn>

        <RadioBtn>
          <input
            type="radio"
            id="income"
            name="type"
            value="income"
            checked={transType === "income"}
            onChange={(e) => setTransType(e.target.value)}
          />
          <Label htmlFor="income">Income</Label>
        </RadioBtn>
      </RadioContainer>

      <SubmitBtn onClick={AddTransactionData}>Add Transaction</SubmitBtn>
    </Container>
  );
};

export default AddTransaction;


