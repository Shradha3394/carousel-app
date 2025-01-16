import {useEffect, useState} from "react";
import InputBox from "./InputBox";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

const CurrencyConvertorRenderer = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyList = Object.keys(currencyInfo);

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  }, [currencyInfo, amount, to]);

  console.log("currencyInfo", currencyInfo);
  return (<>
    <InputBox
      label="From"
      amount={amount}
      currency={from}
      currencyList={currencyList}
      onAmountChange={(amount) => setAmount(amount)}
      onCurrencyChange={(currency) => setFrom(currency)} />
    <div>
    </div>
    <InputBox
      label="To"
      amount={convertedAmount}
      currency={to}
      currencyList={currencyList}
      onCurrencyChange={(currency) => setTo(currency)} />
    <div>
    </div>
  </>)
}

export default CurrencyConvertorRenderer;