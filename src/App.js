import React, { useState, useCallback, useMemo} from 'react';
import './App.css';
import Child from "./components/memo/child";
import Child2 from "./components/memo/child2";
import Child3 from './components/memo/child3'

const App = (props) => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState('');
    const [arr, setArr] = useState([1,2,3,4,5]);

    const updateCounterFromChild = useCallback(
        () => setCounter(counter + 1),[counter]
    );
    const renderMemo = useMemo(
        () =>  <Child2 count={counter} uơdateCounter={updateCounterFromChild}/>,[counter]
    );
        // const updateCounterFromChild = useMemo(
        //     () => setCounter(counter + 1),[]
        // );
    const memoGetlastNumber = useMemo(() =>
        getLastNumber(),[arr]
    )
    function getLastNumber ()  {
        console.log('get last')
        return Math.max(...arr);
    }
    const changeArr = () => {
        setArr([12,13,14])
    }
    const tmp = { a: 1, b: 2}
    const  arrMemo = useMemo(()=> tmp,[])

  return (
      <div>
          <h1> parent: {counter}</h1>
          {input}
          <button onClick={()=> setCounter(counter + 1)}>
              +1
          </button>
          <input type="text" onChange={(e)=> setInput(e.target.value)} value={input}/>
          <Child count={counter} uơdateCounter={updateCounterFromChild}/>
          {renderMemo}
          <hr/>
          <button onClick={ changeArr}>
              changeArr
          </button>
          lastnumber {memoGetlastNumber}

          <Child3 count={arrMemo}/>
      </div>
  );
}
;
export default App;
