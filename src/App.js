import { useCallback, useEffect, useState } from 'react';
import './App.css';


function App() {

  const [quote, setQuote] = useState('');
// 1st way-

  useEffect(() => {
    getNewQuote();
  }, [])

  const getNewQuote = async () => {
    const response = await fetch (`https://api.quotable.io/random`);
    const data = await response.json();
    console.log(data);
    setQuote(data)
  }

  //2nd way -
  //useEffect(() => {
    //const getQuote = async() => {
      //const response = await fetch(`https://api.quotable.io/random`);
      //const data = await response.json();
      //console.log(data)
    //}
    //getQuote()
  //}, [])

  //3rd way -
  //const getQuote = useCallback(async () => {
    //const response = await fetch(`https://api.quotable.io/random`);
    //const data = await response.json();
    //console.log(data);
    //setQuote(data)
  //}, [])
//useEffect(() => {
  //getQuote()
//}, [getQuote])

  return (
    <div className="App">
      <p>{ quote }</p>
    </div>
  );
}

export default App;
