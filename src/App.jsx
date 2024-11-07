import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';


function App() {
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const output = (discount / 100) * amount;
    setDiscountPrice(output);
    const totalAmount = amount - output;
    setTotal(totalAmount);
  }, [amount, discount]); 

  const reset = () => {
    setAmount(0);
    setDiscount(0);
    setDiscountPrice(0);
    setTotal(0);
  };

  return (
    <>
    <div className="section">
      <div className="main">
        <h1>Real-time discount calculator</h1>
        <p>Use the discount calculator online to find out the exact amount you will save!</p>
      </div>
      <div className="head">
        <div className="left">
          <TextField id="standard-basic" label="Amount" variant="standard" value={amount || ""} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} />
            <TextField id="standard-basic" label="Discount%" variant="standard" value={discount || ""} onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)} />
        </div>
        <div className="right">
          <div className='amount'>
            <h1 style={{fontWeight:"200"}}>Discount Price <span style={{fontWeight:'400'}}>&#8377; {discountPrice}</span></h1>
            <h1 style={{marginTop:'30px',fontWeight:"200"}}>New Price <span style={{fontWeight:'400'}}>&#8377;{total}</span></h1>
          </div>
        </div>
      </div>
      <div className="button">
        <Button style={{backgroundColor:"transparent",boxShadow:"0 0 0 0 ", color:"black",fontWeight:"bold"}} variant="contained" onClick={reset}>Reset</Button>
      </div>
    </div>
    </>
  );
}

export default App;
