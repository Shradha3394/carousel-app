const InputBox = ({label, currency, currencyList = [], amount,
  onCurrencyChange, onAmountChange, }) => {

  return (
    <>
      <label>{label}</label>
      <input min={1} type="number" value={amount} onChange={(e) => onAmountChange && onAmountChange(+e.target.value)}></input>
      <label>Currency Type</label>
      <select value={currency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
        {
          currencyList.map((currency, index) => (
            <option key={index}>{currency}</option>
          ))
        }
      </select>
    </>
  )

}

export default InputBox;